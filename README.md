# Certifood Experts Portfolio

Static portfolio website for **Naveed Saleem** (Food Technologist).

## Project Structure

- `index.html` – main page
- `styles.css` – styling
- `script.js` – theme toggle, animations, navigation
- `assets/` – profile image and resume PDF

This is a **pure static site** (no framework, no backend).

---

## Run on localhost

### Option 1 – VS Code Live Server (easiest)

1. Open this folder in VS Code.
2. Install the **Live Server** extension (by Ritwick Dey).
3. Right‑click `index.html` → **Open with Live Server**.
4. Your browser will open at something like `http://127.0.0.1:5500/`.

### Option 2 – Simple Python server

In this folder, run:

```bash
# Python 3
python -m http.server 8000
```

Then open: `http://localhost:8000/` in your browser.

Assets will work correctly because paths are relative (`assets/...`).

---

## Deploy on Vercel (via GitHub)

1. Push this folder to a GitHub repository.
   - Make sure `index.html` is in the **root** of the repo (not inside a subfolder like `src/`).
   - The files should look like:
     - `index.html`
     - `styles.css`
     - `script.js`
     - `vercel.json`
     - `assets/`

2. Go to **https://vercel.com** and log in.
3. Click **New Project** → **Import Git Repository**.
4. Select your GitHub repo.
5. When Vercel asks for framework/preset, choose **Other** / **Static** if it appears.
   - **Build Command**: leave empty.
   - **Output Directory**: leave empty or set to `./` (root).
6. Click **Deploy**.

Vercel will:
- Use `index.html` as the entry point.
- Serve static files from the same folder.
- Use `vercel.json` to route `/` to `index.html` and keep `/assets/...` paths working.

After deployment, you’ll get a `.vercel.app` URL to share.

---

## Customization Tips

- Update content in `index.html` for new projects or certifications.
- Replace `assets/profile.jpeg` with a new image (keep the same file name to avoid changing HTML).
- Update `assets/resume.pdf` when the resume changes.

No build step is required; just edit files, commit, and Vercel will redeploy.
