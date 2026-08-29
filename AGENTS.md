# AGENTS.md

Jekyll 4.4.1 personal site (Ignacio Amaya). Default branch `master`, GitHub Pages, SSH remote. gh requires `source ~/.zshrc`.

## Build
```sh
export PATH="/opt/homebrew/opt/ruby/bin:/opt/homebrew/bin:/opt/homebrew/lib/ruby/gems/4.0.0/bin:$PATH"
jekyll build
```
Note `.jekyll-cache` can go stale — use `jekyll clean` before rebuilding if output looks old.

## Architecture
- `index.html` uses layout `blog`, which falls back to `default`. `default.html` includes `index_head.html` and `index_footer.html` ONLY for the index page; other pages use `head.html`, `header.html`, `footer.html`. **Edit both heads when changing shared `<head>` markup.**
- Homepage sections render from `_data/landing.yaml` (id/name/tpl/css) → `_includes/sections/<tpl>`. The sticky nav comes from `sections:` in `_config.yml`; add a nav item there if a section should appear in the top menu.
- Content is dual-source: `_data/index/*.yml` provides Jekyll fallback `detail` text; `static/locales/en.json` holds the runtime/i18next strings. Keep both in sync. i18n keys follow `{{ section }}_{{ type }}` (e.g. `rovio`, `rovio_des`, `rovio_date`, `rovio_job`).
- i18n spans: `<span data-i18n="...">{{ fallback }}</span>`. Sections are initialized in `static/js/localization.js` — remove the `$('#i18_*').i18n()` line when deleting a section.
- Do NOT edit `static/css/style.min.css` (theme). Override via scoped `<style>` blocks inside the section templates/head. CSS specificity in the theme is high (e.g. `.landing-page .social-icon a` = two classes); match or exceed specificity and remember inline `<style>` in body wins over head stylesheet for ties.

## Design decisions / current state
- Fonts: Inter only (body + headings). Google Fonts `<link>` in both heads. No Space Grotesk.
- Single language (English) — do not add a language selector.
- Accent color `#3385FF`; body base 13px; section content text ~15px for readability.
- Hero on index: navy gradient + circular portrait (`static/img/landing/me.jpeg`, 800×800). Social circles use `.hero-social.list-inline a` to beat the theme.
- About & Publications sections were deleted (hero covers About; defunct). Career = 4 blocks (rovio/ey/qliro/education), single-sided timeline, company + dates outside cards, description inside. Skills = icon chips (font-mfizz + FontAwesome 4.7, verified against shipped fonts). Links = 4 `col-sm-3` cards, icon circles bottom-aligned via flex; GDC/re:Invent/UNICEF/Rovio stories.
- Blog/posts: leave untouched.

## Commit / PR flow
- Feature branch → short single commit → `git push -u origin <branch>` → `gh pr create --base master`.
- GitHub auto-deletes remote branch on merge; delete feature branch locally after.
- Commit author shows `los-ibericos` (user's GitHub email `xinofekuator@gmail.com` is registered to that account) — known/accepted.

## Gotchas
- YAML: colon+space inside an unquoted scalar breaks parsing — quote the value.
- Never use `ba`, `disqus`, `changyan`, `bshare`, `gio` (disabled).
- `@font-face`/Google Fonts only via the two heads, not style.min.css.