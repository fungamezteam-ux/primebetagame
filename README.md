# Prime Beta Games — Website

Website domain: **https://primebetagames.site**

A responsive static website for Prime Beta Games. It includes a home page, game portfolio, About, Contact & Support, Privacy Policy, Terms of Service, responsive navigation, favicon and SEO metadata.

## Files
- `index.html` — home page and game portfolio
- `about.html` — about the studio
- `contact.html` — contact/support form (currently opens the visitor's email app)
- `privacy.html` — Privacy Policy for Prime Beta Games
- `terms.html` — terms starter template
- `styles.css`, `script.js`, `assets/` — styling, interactions and favicon
- `CNAME` — custom domain for GitHub Pages (`primebetagames.site`)

## Publish with GitHub Pages
1. Create a **public** GitHub repository, for example `prime-beta-games-website`.
2. Upload the **contents of this ZIP**, not the ZIP file itself. Make sure `index.html`, `CNAME`, `styles.css`, and `script.js` are at the repository root.
3. Open repository **Settings → Pages**. Under Build and deployment, choose **Deploy from a branch**, select branch `main` and folder `/(root)`, then Save.
4. In **Settings → Pages → Custom domain**, enter `primebetagames.site` and save. If GitHub already created a `CNAME` file, ensure its only line is `primebetagames.site`.
5. In Namecheap **Domain List → Manage → Advanced DNS**, remove the old website records only: the `www` CNAME pointing to `parkingpage.namecheap.com` and the `@` URL Redirect Record. Then add the GitHub Pages records listed below. **Do not delete Zoho Mail MX, SPF, DKIM, or Zoho verification TXT records.**
6. Wait for DNS to update, then return to GitHub **Settings → Pages** and enable **Enforce HTTPS** when it becomes available. DNS changes can take up to 24 hours.

### Namecheap DNS records for GitHub Pages
Create four `A Record` entries, each with Host `@` and TTL `Automatic`:
- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

Create one `CNAME Record` with Host `www`, Value **YOUR-GITHUB-USERNAME.github.io** (replace `YOUR-GITHUB-USERNAME` with your actual GitHub username; do not add the repository name), TTL `Automatic`.

## Before launch — important
1. **Contact email:** the website contact form and Privacy Policy use `support@primebetagames.site`. Make sure this mailbox is created and able to receive email before launch.
2. **Game store links:** edit the sample game cards in `index.html`; replace `href="#"` with each game's real store URL.
3. **Legal pages:** review `privacy.html` and `terms.html` against the SDKs and data practices actually used in each game, age groups, purchases, deletion methods and target countries. The Privacy Policy is a general studio policy and should be kept accurate for each release.
4. **Contact form:** it does not send/store messages on a server; it prepares an email using the visitor's email app.
5. **Test:** check all pages on desktop/mobile, store links, contact email, and that the privacy policy opens publicly.

## Preview locally
Extract the ZIP and open `index.html`, or use VS Code Live Server for a closer local preview. No build tools or package installation are required.
