# Xoopah Marketing OS

Internal marketing dashboard for Xoopah — content, weekly reports, and
competitor tracking in one place.

## Get this running

1. **Upload these files to your repo**
   Go to your `xoopah-marketing-os` repo on github.com → "Add file" →
   "Upload files" → drag in everything from this folder (keep the folder
   structure) → Commit.

2. **Open your Codespace**
   Once the files are actually in the repo, open (or restart) your
   Codespace.

3. **Set your password**
   In the Codespace terminal:
   ```
   cp .env.example .env.local
   ```
   Then open `.env.local` and change `APP_PASSWORD=change-me` to whatever
   password you want to log in with.

4. **Install and run**
   ```
   npm install
   npm run dev -- --hostname 0.0.0.0
   ```
   Wait for "Ready", then open the forwarded port 3000. You'll land on the
   login screen — enter the password you just set.

## Already have this running? Update it like this

You already unzipped and ran the first version. To bring in this update
(new nav bar, new pages), in your Codespace terminal:

```
unzip -o xoopah-marketing-os.zip
cp -r xoopah-marketing-os/. . && rm -rf xoopah-marketing-os xoopah-marketing-os.zip
npm install
```

Your `.env.local` (with your password) is untouched — it's gitignored and
this update doesn't overwrite it. Then just re-run:

```
npm run dev -- --hostname 0.0.0.0
```

## What's in this shell

- `/` — Dashboard: Xoopah overview, what marketing does, stats, positioning
  line, north star, and cards to every section
- `/brand` — Visual, Messaging, Positioning
- `/icp` — Ideal Customer Profile (two-column layout, research methods,
  pain points, onboarding data, what's next)
- `/competitors` — one page per Xoopah feature
- `/content` — Meta Ads, Blogs, Socials, Community, Emails
- `/reports` — placeholder for new period reports going forward
- `/h1` — the H1 2026 archive: Meetings, Competitor Monitoring, Email
  Sequences, Research Repository, Content Pipeline, Job Descriptions
- Sign out button in the nav clears your session and returns to `/login`
- Password-gated: everything requires the password in `.env.local`

## What's not built yet

- Images (Notion's image links are temporary and need a dedicated
  download-and-host pass)
- Full text for the 5 Feb '26 blog articles (titles are listed)
- JD — Creative Designer, JD — SEO Specialist (full detail)
- H1/H2 progress narrative, Performance Marketing (Badar) report
