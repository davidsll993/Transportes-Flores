$source = "c:\Users\DELL\Documents\GitHub\PAGINA TRANSPORTES FLORES"
$dest = "c:\Users\DELL\Documents\GitHub\TRANSPORTES_FLORES_LANDING"

Write-Host "Creating directory..."
if (Test-Path $dest) { Remove-Item -Recurse -Force $dest }
New-Item -ItemType Directory -Path $dest | Out-Null

Write-Host "Copying files (excluding node_modules, .next, etc)..."
& robocopy $source $dest /E /XD node_modules .next .git out | Out-Null

Write-Host "Cleaning up portal and login files..."
if (Test-Path "$dest\app\portal") { Remove-Item -Recurse -Force "$dest\app\portal" }
if (Test-Path "$dest\app\login") { Remove-Item -Recurse -Force "$dest\app\login" }
if (Test-Path "$dest\proxy.ts") { Remove-Item -Force "$dest\proxy.ts" }
if (Test-Path "$dest\_proxy.ts") { Remove-Item -Force "$dest\_proxy.ts" }
if (Test-Path "$dest\export_static.ps1") { Remove-Item -Force "$dest\export_static.ps1" }

Write-Host "Success! Clean clone created at $dest"
exit 0
