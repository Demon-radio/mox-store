# Downloads real brand logos locally so the site never depends on
# hotlink-protected CDNs (bangjeff CDN returns 403, clearbit is dead).
# Saves to public/images/services/{key}.{ext}
$ErrorActionPreference = "Continue"
$dir = Join-Path $PSScriptRoot "..\public\images\services"
New-Item -ItemType Directory -Force -Path $dir | Out-Null

$map = [ordered]@{
  "pubg"        = @( "https://www.google.com/s2/favicons?domain=pubgmobile.com&sz=256" )
  "freefire"    = @( "https://www.google.com/s2/favicons?domain=ff.garena.com&sz=256" )
  "fcmobile"    = @( "https://www.google.com/s2/favicons?domain=ea.com&sz=256" )
  "mlbb"        = @( "https://www.google.com/s2/favicons?domain=mobilelegends.com&sz=256" )
  "bloodstrike" = @( "https://www.google.com/s2/favicons?domain=bloodstrike.com&sz=256" )
  "coinmaster"  = @( "https://www.google.com/s2/favicons?domain=coinmaster.com&sz=256" )
  "shahid"      = @( "https://www.google.com/s2/favicons?domain=shahid.net&sz=256" )
  "osn"         = @( "https://www.google.com/s2/favicons?domain=osn.com&sz=256" )
  "yango"       = @( "https://www.google.com/s2/favicons?domain=yango.com&sz=256" )
  "chatgpt"     = @( "https://www.google.com/s2/favicons?domain=chatgpt.com&sz=256", "https://www.google.com/s2/favicons?domain=openai.com&sz=256" )
  "netflix"     = @( "https://cdn.simpleicons.org/netflix/FFFFFF" )
  "roblox"      = @( "https://cdn.simpleicons.org/roblox/FFFFFF" )
  "gemini"      = @( "https://cdn.simpleicons.org/googlegemini/FFFFFF" )
  "claude"      = @( "https://cdn.simpleicons.org/claude/FFFFFF" )
  "paypal"      = @( "https://cdn.simpleicons.org/paypal/FFFFFF" )
  "googleplay"  = @( "https://cdn.simpleicons.org/googleplay/FFFFFF" )
  "appstore"    = @( "https://cdn.simpleicons.org/appstore/FFFFFF" )
  "tiktok"      = @( "https://cdn.simpleicons.org/tiktok/FFFFFF" )
  "facebook"    = @( "https://cdn.simpleicons.org/facebook/FFFFFF" )
  "meta"        = @( "https://cdn.simpleicons.org/meta/FFFFFF" )
  "instagram"   = @( "https://cdn.simpleicons.org/instagram/FFFFFF" )
  "snapchat"    = @( "https://cdn.simpleicons.org/snapchat/FFFFFF" )
  "spotify"     = @( "https://cdn.simpleicons.org/spotify/FFFFFF" )
  "crunchyroll" = @( "https://cdn.simpleicons.org/crunchyroll/FFFFFF" )
}

foreach ($key in $map.Keys) {
  $saved = $false
  foreach ($url in $map[$key]) {
    try {
      $r = Invoke-WebRequest -Uri $url -UseBasicParsing -TimeoutSec 20 -OutFile "$dir\__tmp.bin" -PassThru
      $size = (Get-Item "$dir\__tmp.bin").Length
      if ($r.StatusCode -eq 200 -and $size -gt 100) {
        $ct = ($r.Headers["Content-Type"] -join "")
        $ext = switch -Wildcard ($ct) {
          "*svg*"  { "svg" }
          "*jpeg*" { "jpg" }
          "*webp*" { "webp" }
          default  { "png" }
        }
        $path = Join-Path $dir "$key.$ext"
        if (Test-Path $path) { Remove-Item $path -Force }
        Move-Item "$dir\__tmp.bin" $path -Force
        Write-Output "SAVED  $key.$ext  ($($size) bytes)"
        $saved = $true
        break
      }
    } catch {
      Write-Output "  trying next: $key -> $($_.Exception.Message.Substring(0, [Math]::Min(60, $_.Exception.Message.Length)))"
    }
  }
  if (-not $saved) { Write-Output "MISSING $key" }
}
Write-Output "DONE"
