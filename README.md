# sofiafdzl.com

Personal academic site, built with [Astro](https://astro.build). Content
lives in `src/content/` as YAML collections; the CV PDF in `public/cv.pdf`
is copied in manually from the CV repository.

```sh
pnpm install
pnpm dev        # local server at localhost:4321
pnpm build      # static build to dist/
```

## Keeping in sync with the CV

The academic CV in `~/Documents/CV` is the source of truth. After any
change there, or at least once a term:

1. `just cv-academic` in the CV repo, then copy `build/cv-academic.pdf`
   to `public/cv.pdf`.
2. Set `updated` in `src/data/profile.ts` to the stamp in the PDF footer.
3. Diff `typst/profile_academic/*.typ` against `src/content/` and carry
   over fact changes (new positions, dates, statuses, bylines). Wording
   tweaks made for line breaks on the printed CV stay on the CV.
4. Re-read the About prose on `/` and the role and themes in
   `src/data/profile.ts`; they are not generated from the collections
   and go stale on their own. `featured: true` on a publication puts it
   under "Selected publications" on the home page.
5. If the position changed, update `scripts/og.html` and regenerate the
   social preview image:

   ```sh
   chromium --headless --hide-scrollbars --allow-file-access-from-files \
     --window-size=1200,630 --screenshot=public/og.png \
     "file://$PWD/scripts/og.html"
   ```

6. `pnpm build`, check `/`, `/cv` and `/publications`, commit.
