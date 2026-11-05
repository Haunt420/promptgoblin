# KENZEN Cockpit for Perchance (Android APK and Web Engine)

A mobile prompt engineering cockpit designed for Perchance AI text-to-image generators (Mack's Place, AI Real Revolution, Qinegen, and The Imaginarium).

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

2.  In your GitHub repository, click on the Actions tab.
3.  Select the active workflow run "Build Android APK".
4.  Once completed, scroll to the bottom Artifacts section and download
    kenzen-cockpit-perchance-apk.
5.  Transfer or download the .apk file onto your Android device and tap to
    install.

Releasing:

Push a Git tag (e.g. v1.0.0) to automatically generate a GitHub Release with the
APK attached:

git tag v1.0.0
git push origin v1.0.0

Local Development and Compilation

If compiling locally using Android Studio:

npm install
node scripts/generate-icons.js
node scripts/build-full.js
npx cap sync android
cd android
./gradlew assembleDebug

The APK output is generated at
