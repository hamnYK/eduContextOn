# Force UTF-8 Output
$OutputEncoding = [System.Text.Encoding]::UTF8

# Set current directory to script root
$ScriptRootDir = [System.IO.Path]::GetDirectoryName($MyInvocation.MyCommand.Path)
[System.IO.Directory]::SetCurrentDirectory($ScriptRootDir)
Set-Location -LiteralPath $ScriptRootDir

Write-Host "==========================================" -ForegroundColor Cyan
Write-Host " eduContextOn — Build & Deploy Script     " -ForegroundColor Cyan
Write-Host " (Jekyll Source Optimization + gh-pages)  " -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan

$SourceDir = $ScriptRootDir
$DestDir   = [System.IO.Path]::Combine($SourceDir, "dist")

# =========================================================
# 1. dist 초기화
# =========================================================
if ([System.IO.Directory]::Exists($DestDir)) {
    Write-Host " Removing existing dist directory..." -ForegroundColor Yellow
    try {
        Remove-Item -LiteralPath $DestDir -Recurse -Force -ErrorAction Stop
    }
    catch {
        Write-Host " Warning: Could not fully remove dist. Cleaning contents..." -ForegroundColor DarkYellow
        Get-ChildItem -LiteralPath $DestDir -Force | ForEach-Object {
            try { Remove-Item -LiteralPath $_.FullName -Recurse -Force -ErrorAction SilentlyContinue } catch {}
        }
    }
}
[System.IO.Directory]::CreateDirectory($DestDir) | Out-Null

# =========================================================
# 2. Jekyll 필수 파일/디렉토리 복사
#    - 주석 제거 없이 있는 그대로 복사 (Jekyll 템플릿은 Liquid 태그 포함)
# =========================================================
Write-Host " Copying Jekyll source files..." -ForegroundColor Yellow

# 디렉토리 복사 목록 (Jekyll 빌드에 필요한 소스 전체)
$CopyDirs = @("_includes", "_layouts", "assets", "css", "en")

foreach ($dir in $CopyDirs) {
    $srcPath  = [System.IO.Path]::Combine($SourceDir, $dir)
    $destPath = [System.IO.Path]::Combine($DestDir, $dir)
    if ([System.IO.Directory]::Exists($srcPath)) {
        Write-Host "  -> Copying directory: $dir" -ForegroundColor Gray
        if (-not [System.IO.Directory]::Exists($destPath)) {
            [System.IO.Directory]::CreateDirectory($destPath) | Out-Null
        }
        Get-ChildItem -LiteralPath $srcPath -Force | ForEach-Object {
            $itemDest = [System.IO.Path]::Combine($destPath, $_.Name)
            Copy-Item -LiteralPath $_.FullName -Destination $itemDest -Recurse -Force
        }
    }
}

# 단일 파일 복사 목록
$CopyFiles = @("_config.yml", "CNAME", "robots.txt", "sitemap.xml")

foreach ($file in $CopyFiles) {
    $srcPath  = [System.IO.Path]::Combine($SourceDir, $file)
    $destPath = [System.IO.Path]::Combine($DestDir, $file)
    if ([System.IO.File]::Exists($srcPath)) {
        Write-Host "  -> Copying file: $file" -ForegroundColor Gray
        Copy-Item -LiteralPath $srcPath -Destination $destPath -Force
    }
}

# =========================================================
# 3. index.md (루트) — HTML 개발 주석만 제거, Liquid/Markdown 보존
# =========================================================
Write-Host " Processing index.md..." -ForegroundColor Yellow

$IndexMdFiles = @(
    [System.IO.Path]::Combine($SourceDir, "index.md"),
    [System.IO.Path]::Combine($SourceDir, "en", "index.md")
)

foreach ($mdPath in $IndexMdFiles) {
    if (-not [System.IO.File]::Exists($mdPath)) { continue }

    $fileName    = [System.IO.Path]::GetFileName($mdPath)
    $relativeDir = if ($mdPath -like "*\en\*") { "en" } else { "" }
    $destMdDir   = if ($relativeDir -eq "en") {
        [System.IO.Path]::Combine($DestDir, "en")
    } else { $DestDir }

    if (-not [System.IO.Directory]::Exists($destMdDir)) {
        [System.IO.Directory]::CreateDirectory($destMdDir) | Out-Null
    }

    $destMdPath = [System.IO.Path]::Combine($destMdDir, $fileName)
    $content    = [System.IO.File]::ReadAllText($mdPath, [System.Text.Encoding]::UTF8)

    # HTML 주석 제거 (<!-- ... -->) — Liquid 블록({%...%}, {{...}}) 내부 주석은 보존됨
    # Jekyll Liquid 태그 안에는 HTML 주석이 없으므로 안전
    $content = [System.Text.RegularExpressions.Regex]::Replace($content, "(?s)<!--.*?-->", "")

    # 빈 줄 정리 (연속 3줄 이상 → 2줄로 압축)
    $content = [System.Text.RegularExpressions.Regex]::Replace($content, "(\r?\n){3,}", "`r`n`r`n")

    [System.IO.File]::WriteAllText($destMdPath, $content.Trim() + "`r`n", [System.Text.Encoding]::UTF8)
    Write-Host "  -> Processed: $relativeDir/$fileName" -ForegroundColor Gray
}

# =========================================================
# 4. JS 파일 주석 제거 (Minification)
# =========================================================
Write-Host " Minifying JS files..." -ForegroundColor Yellow

function Optimize-Js($content) {
    # JS 블록 주석 /* ... */ 제거
    $content = [System.Text.RegularExpressions.Regex]::Replace($content, "(?s)/\*.*?\*/", "")
    # 라인 주석 // ... 제거 (URL 내부 // 는 보존: (?<!:) lookbehind 사용)
    $content = [System.Text.RegularExpressions.Regex]::Replace($content, "(?m)(?<!:|'|`"|`)\/\/.*$", "")
    # 빈 줄 정리
    $content = [System.Text.RegularExpressions.Regex]::Replace($content, "(?m)^\s*[\r\n]+", "`r`n")
    return $content.Trim()
}

$JsSourceDir = [System.IO.Path]::Combine($SourceDir, "js")
$JsDestDir   = [System.IO.Path]::Combine($DestDir, "js")

if ([System.IO.Directory]::Exists($JsSourceDir)) {
    if (-not [System.IO.Directory]::Exists($JsDestDir)) {
        [System.IO.Directory]::CreateDirectory($JsDestDir) | Out-Null
    }
    $JsFiles = [System.IO.Directory]::GetFiles($JsSourceDir, "*.js")
    foreach ($filePath in $JsFiles) {
        $fileName    = [System.IO.Path]::GetFileName($filePath)
        $destPath    = [System.IO.Path]::Combine($JsDestDir, $fileName)
        $rawContent  = [System.IO.File]::ReadAllText($filePath, [System.Text.Encoding]::UTF8)
        $minified    = Optimize-Js $rawContent
        [System.IO.File]::WriteAllText($destPath, $minified, [System.Text.Encoding]::UTF8)
        Write-Host "  -> Minified: js/$fileName" -ForegroundColor Gray
    }
}

# =========================================================
# 5. CSS 파일 주석 제거 (Minification)
# =========================================================
Write-Host " Minifying CSS files..." -ForegroundColor Yellow

function Optimize-Css($content) {
    # CSS 블록 주석 /* ... */ 제거
    $content = [System.Text.RegularExpressions.Regex]::Replace($content, "(?s)/\*.*?\*/", "")
    # 빈 줄 정리
    $content = [System.Text.RegularExpressions.Regex]::Replace($content, "(?m)^\s*[\r\n]+", "`r`n")
    return $content.Trim()
}

$CssSourceDir = [System.IO.Path]::Combine($SourceDir, "css")
$CssDestDir   = [System.IO.Path]::Combine($DestDir, "css")

if ([System.IO.Directory]::Exists($CssSourceDir)) {
    if (-not [System.IO.Directory]::Exists($CssDestDir)) {
        [System.IO.Directory]::CreateDirectory($CssDestDir) | Out-Null
    }
    $CssFiles = [System.IO.Directory]::GetFiles($CssSourceDir, "*.css")
    foreach ($filePath in $CssFiles) {
        $fileName    = [System.IO.Path]::GetFileName($filePath)
        $destPath    = [System.IO.Path]::Combine($CssDestDir, $fileName)
        $rawContent  = [System.IO.File]::ReadAllText($filePath, [System.Text.Encoding]::UTF8)
        $minified    = Optimize-Css $rawContent
        [System.IO.File]::WriteAllText($destPath, $minified, [System.Text.Encoding]::UTF8)
        Write-Host "  -> Minified: css/$fileName" -ForegroundColor Gray
    }
}

Write-Host "==========================================" -ForegroundColor Green
Write-Host " Build Completed Successfully!            " -ForegroundColor Green
Write-Host " Destination: $DestDir                   " -ForegroundColor Green
Write-Host "==========================================" -ForegroundColor Green

# =========================================================
# 6. GitHub Pages 자동 배포
#    dist/ 내용을 로컬 Temp 경유 → main 브랜치 force push
# =========================================================
Write-Host " Starting Auto Deployment to GitHub Pages..." -ForegroundColor Cyan

$OrigDir       = [System.IO.Directory]::GetCurrentDirectory()
$TempDeployDir = [System.IO.Path]::Combine($env:TEMP, "educontexton_gh_deploy")

# 시스템 경로 안전 가드
if ($TempDeployDir -notlike "*educontexton_gh_deploy" -or
    $TempDeployDir -like "*C:\Windows*" -or
    $TempDeployDir -like "*System32*") {
    throw "Fatal: Path validation failed. Refusing to proceed to protect system files."
}

try {
    # 이전 임시 폴더 정리
    if ([System.IO.Directory]::Exists($TempDeployDir)) {
        Write-Host "  -> Cleaning up old temporary deploy folder..." -ForegroundColor Gray
        Remove-Item -LiteralPath $TempDeployDir -Recurse -Force -ErrorAction SilentlyContinue
    }
    [System.IO.Directory]::CreateDirectory($TempDeployDir) | Out-Null

    # dist → Temp 복사 (OneDrive 잠금 우회)
    Write-Host "  -> Preparing deployment files in local Temp folder..." -ForegroundColor Gray
    Get-ChildItem -LiteralPath $DestDir -Force | ForEach-Object {
        $tempDestPath = [System.IO.Path]::Combine($TempDeployDir, $_.Name)
        Copy-Item -LiteralPath $_.FullName -Destination $tempDestPath -Recurse -Force
    }

    # Temp 폴더로 이동
    [System.IO.Directory]::SetCurrentDirectory($TempDeployDir)
    Set-Location -LiteralPath $TempDeployDir

    # Git 초기화 및 커밋
    Write-Host "  -> Initializing temporary git repo..." -ForegroundColor Gray
    & git init | Out-Null
    & git config user.email "worflogy@gmail.com" | Out-Null
    & git config user.name "worflogy" | Out-Null

    & git add . | Out-Null
    $commitMsg = "deploy: eduContextOn Auto-build Deployment ($(Get-Date -Format 'yyyy-MM-dd HH:mm:ss'))"
    & git commit -m "$commitMsg" | Out-Null

    # main 브랜치로 force push
    Write-Host "  -> Force pushing to Remote main branch..." -ForegroundColor Yellow
    $pushResult = & git push -f "https://github.com/hamnYK/eduContextOn.git" master:main 2>&1
    Write-Host "  $pushResult" -ForegroundColor Gray

    Write-Host "==========================================" -ForegroundColor Green
    Write-Host " Deploy Completed Successfully!           " -ForegroundColor Green
    Write-Host "==========================================" -ForegroundColor Green
}
catch {
    Write-Host " Error occurred during deployment: $_" -ForegroundColor Red
}
finally {
    # 원래 디렉토리 복원
    [System.IO.Directory]::SetCurrentDirectory($OrigDir)
    Set-Location -LiteralPath $OrigDir

    # Temp 폴더 정리
    if ([System.IO.Directory]::Exists($TempDeployDir) -and $TempDeployDir -like "*educontexton_gh_deploy") {
        Write-Host "  -> Removing local temporary deploy folder..." -ForegroundColor Gray
        Remove-Item -LiteralPath $TempDeployDir -Recurse -Force -ErrorAction SilentlyContinue
    }
}
