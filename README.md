# AristoBadges

AristoBadges is a minimal, cache-friendly SVG badge service for GitHub repos, orgs, and NPM packages. Built for README dashboards with fast server-side rendering and predictable URLs.

Pick a template URL, add your values, and drop the SVG into any README.

---

<p align="center">
  <img src="./docs/banner.png" alt="Commit activity" />
</p>

---

<br/>
<p align="center">
  <img src="https://img.shields.io/github/commit-activity/m/aristobyte/aristo-badges?style=for-the-badge" alt="Commit activity" />
  <img src="https://img.shields.io/github/last-commit/aristobyte/aristo-badges?style=for-the-badge" alt="Last commit" />
  <img src="https://img.shields.io/github/stars/aristobyte/aristo-badges?style=for-the-badge" alt="GitHub stars" />
  <img src="https://img.shields.io/github/issues/aristobyte/aristo-badges?style=for-the-badge" alt="Open issues" />
  <img src="https://img.shields.io/github/issues-pr/aristobyte/aristo-badges?style=for-the-badge" alt="Open PRs" />
  <img src="https://img.shields.io/github/license/aristobyte/aristo-badges?style=for-the-badge" alt="License" />
  <img src="https://img.shields.io/badge/Docs-badges.aristobyte.com-0ea5e9?style=for-the-badge" alt="Docs" />
  <img src="https://img.shields.io/badge/Node-20+-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js >=20" />
  <img src="https://img.shields.io/badge/NPM-10+-CB3837?style=for-the-badge&logo=npm&logoColor=white" alt="NPM >=10" />
</p>

---

## 🔀 Repository Badge

Activity, releases, and engagement for a single repo.

<p align="center">
  <img src="https://badges.aristobyte.com/api/repo?owner=aristobyte-ui&repo=aristobyte-ui" alt="Repo Badge" />
</p>

### 👤 Organisation Badge

Org-wide stars, repos, forks, PRs, issues and activity.

<p align="center">
  <img src="https://badges.aristobyte.com/api/org?org=aristobyte-ui" alt="Org Badge" />
</p>

### 📦 NPM Package Badge

Version and downloads for an NPM package.

<p align="center">
  <img src="https://badges.aristobyte.com/api/npm?namespace=@aristobyte-ui&pkg=spinner" alt="NPM Badge" />
</p>

---

## 🔗 Links

- Documentation: https://ui.aristobyte.com
- GitHub Org: https://github.com/aristobyte-ui
- Repository: https://github.com/aristobyte/aristo-badges
- Releases: https://github.com/aristobyte/aristo-badges/releases
- NPM Org: https://www.npmjs.com/org/aristobyte-ui

---

## ⚡ Endpoints

Repository Badge

```
https://badges.aristobyte.com/api/repo?owner=<ORG_OR_USER>&repo=<REPO>
```

Organisation or Owner Badge

```
https://badges.aristobyte.com/api/org?org=<ORG>
```

NPM Package Badge

```
https://badges.aristobyte.com/api/npm?namespace=<SCOPE>&pkg=<PACKAGE>
```

---

## 🧭 Project Architecture

- App type: Next.js App Router (`app/`)
- Locale entry flow:
  - `app/page.tsx` redirects to fallback locale (`en-gb`)
  - `app/[locale]/page.tsx` renders the main UI
- Public API routes:
  - `app/api/repo/route.ts`
  - `app/api/org/route.ts`
  - `app/api/npm/route.ts`
- Shared API internals: `app/api/_lib/` (request parsing, data sources, formatters, SVG mappers/templates, response helpers)
- Main UI composition: `SiteHeader`, `ProjectInfo`, `QuickLinks`, `BadgesBuilder`, `FooterNote` (`components/`)
- Config + i18n:
  - `config/index.ts`
  - `hooks/useConfig.tsx`
  - `hooks/useTranslation.tsx`
  - `translations/` (fallback locale: `en-gb`)
- URL builders for previews/copy actions: `utils/url.ts`
- Testing:
  - Unit tests: `*.unit.test.ts(x)`
  - Server tests: `*.server.test.ts(x)`
  - API tests: `app/api/_lib/__tests__/`
- Checks and CI:
  - Local check scripts: `scripts/check-*.sh`
  - Workflows: `.github/workflows/checks.yml`, `.github/workflows/validate-tags.yml`

---

## 🚀 Getting Started

```bash
yarn install
yarn dev
```

Open:

```
http://localhost:3000/en-gb
```

---

## ☁️ Netlify Deployment

Build settings:

- Build command: `yarn build`
- Publish directory: `.next`

Environment variables:

- `GITHUB_TOKEN` (recommended)

### GitHub Token

Create a token ([what is `GITHUB_TOKEN`](https://docs.github.com/en/actions/concepts/security/github_token)) with access to public repos and add it as:

```
GITHUB_TOKEN=<your_token>
```

Netlify:

```
Site Settings → Environment Variables → Add Variable
```

---

## 📡 Data Sources

- GitHub REST API (`api.github.com`)
- NPM Registry (`registry.npmjs.org`)
- NPM Downloads API (`api.npmjs.org`)

---

## 🤝 Contributing

- Issues: [github.com/aristobyte/aristo-badges/issues](https://github.com/aristobyte/aristo-badges/issues)
- Pull requests: [github.com/aristobyte/aristo-badges/pulls](https://github.com/aristobyte/aristo-badges/pulls)

---

## 🔐 Security

- Security overview: [github.com/aristobyte/aristo-badges/security](https://github.com/aristobyte/aristo-badges/security)
- Report a vulnerability: [github.com/aristobyte/aristo-badges/security/advisories/new](https://github.com/aristobyte/aristo-badges/security/advisories/new)

---

## 📜 License

[`MIT`](./LICENSE) © AristoByte
