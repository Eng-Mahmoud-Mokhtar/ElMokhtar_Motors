# Luxury Car Rental — Deployment

This repository contains the Luxury Car Rental site built with Vite + React + TypeScript.

How to push to GitHub and enable Pages

1. Create a GitHub repository (on github.com) under your account.
2. Add the remote to your local repo (replace <URL> with the Git URL):

```powershell
git remote add origin <URL>
git branch -M main
git push -u origin main
```

3. The repository contains a GitHub Actions workflow that will build the site and publish the `dist/` folder to GitHub Pages automatically (via the `gh-pages` branch). After you push, GitHub Actions will run and deploy.

Notes on GitHub Pages and `base`/`homepage`
- If you host on GitHub Pages under a repository (user.github.io/<repo>), the action will publish to the `gh-pages` branch and the site will be available at `https://<user>.github.io/<repo>/`.
- If you prefer to host the site at the repository root path you may set Vite's `base` option or add `homepage` in `package.json`. The workflow below should work without changes.

Optimizations
- Large assets (MP4, very large JPGs) are included in the build. For faster loading consider optimizing images (WebP/AVIF) or hosting large videos via a CDN.

If you want, I can:
- Add repository-specific `base` setting if you tell me the repo name.
- Optimize large assets before building.
- Push to the remote for you if you provide the GitHub repo URL and confirm you have a token set up (or you push it yourself after I commit locally).

  # Luxury Car Rental Website

  This is a code bundle for Luxury Car Rental Website. The original project is available at https://www.figma.com/design/Oq5sR9qzAgxTOtKdFgq4CQ/Luxury-Car-Rental-Website.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.
  