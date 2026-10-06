# Sajjad Hossain — QA Engineer Portfolio

A responsive dark-themed portfolio built with Next.js, TypeScript, Tailwind CSS and Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Customize

Edit `components/Portfolio.tsx` to update:
- Name / headline
- Skills
- Projects
- Experience
- GitHub and LinkedIn URLs
- Email

The public repository does not include the current resume PDF because it contains a reference's contact details. To enable a direct resume download, add a redacted PDF at:

`public/resume.pdf`

Remove the `public/resume.pdf` entry from `.gitignore` after adding the redacted version. Until then, the **Request Resume** button lets visitors email you.

## Deploy

Push the project to GitHub and import it into Vercel.
