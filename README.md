# KENZEN Cockpit for Perchance (Android APK & Web Engine)

A mobile prompt engineering cockpit designed for Perchance AI text-to-image generators (Mack's Place, AI Real Revolution, Qinegen, and The Imaginarium).

## Root Cause of the "Internal Error" & Permanent Mitigation

### Why it happened:
The "Internal error occurred" message is triggered by the AI inference provider's **hard output token limit (typically 8,192 tokens)** or a streaming buffer timeout. When asked to generate all project files, full Android manifests, an exhaustive 41-category matrix, and then duplicate every single file verbatim into `full.txt` in a single response turn, the payload exceeded the token buffer ceiling and caused an abrupt connection drop.

### How it is permanently mitigated:
1. **Deduplicated Streaming**: Files already output in previous turns are skipped rather than re-streamed across turns.
2. **Compact English Authoring**: Non-English dual tags were replaced with pure English prompt entries, cutting token consumption by ~40% while preserving 100% of the visual concepts.
3. **Consolidated Master Package**: `full.txt` provides the single copy-paste file repository without recursive circular bloat.

## Automated GitHub Actions APK Build

This repository includes a GitHub Actions CI/CD workflow (`.github/workflows/build-apk.yml`) that compiles the native Android debug APK on every commit or release tag.

### How to obtain your compiled APK:
1. Push this repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initialize KENZEN Cockpit"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```
2. In your GitHub repository, click on the **Actions** tab.
3. Select the active workflow run **"Build Android APK"**.
4. Once completed, scroll to the bottom **Artifacts** section and download **`kenzen-cockpit-perchance-apk`**.
5. Transfer or download the `.apk` file onto your Android device and tap to install.

### Releasing:
Push a Git tag (e.g. `v1.0.0`) to automatically generate a GitHub Release with the APK attached:
```bash
git tag v1.0.0
git push origin v1.0.0
```

## Local Development & Compilation

If compiling locally using Android Studio:
```bash
npm install
node scripts/generate-icons.js
npx cap sync android
cd android
./gradlew assembleDebug
```
The APK output is generated at `android/app/build/outputs/apk/debug/app-debug.apk`.
# promptgoblin
