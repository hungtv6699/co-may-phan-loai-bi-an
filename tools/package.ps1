$ErrorActionPreference='Stop'
$root=Split-Path -Parent $PSScriptRoot
$dest=Join-Path $root 'outputs'
New-Item -ItemType Directory -Force $dest | Out-Null
$offline=@('index.html','game.css','game.js','assets','README.md','reports')
if(Test-Path (Join-Path $root 'audio/manifest.js')) {$offline+='audio'}
Compress-Archive -LiteralPath ($offline | ForEach-Object {Join-Path $root $_}) -DestinationPath (Join-Path $dest 'GAME_CO_MAY_PHAN_LOAI_BI_AN_OFFLINE.zip') -Force
Compress-Archive -LiteralPath (($offline+@('tools','.nojekyll','.gitignore')) | ForEach-Object {Join-Path $root $_}) -DestinationPath (Join-Path $dest 'GAME_CO_MAY_PHAN_LOAI_BI_AN_SOURCE.zip') -Force
Compress-Archive -LiteralPath (Join-Path $root 'reports/screenshots') -DestinationPath (Join-Path $dest 'ANH_KIEM_THU.zip') -Force
if(Test-Path (Join-Path $root 'audio/manifest.js')) {
  Compress-Archive -LiteralPath @((Join-Path $root 'audio'),(Join-Path $root 'assets')) -DestinationPath (Join-Path $dest 'AM_THANH_VA_HINH_ANH.zip') -Force
}
