# ProductIQ AI

ProductIQ AI is a product-data operations workspace for industrial catalog teams. It converts fragmented datasheets, spreadsheets, images, and manufacturer pages into structured product profiles with field-level confidence, source evidence, and a human review trail.

## Why this project

Industrial product data is usually scattered across PDFs, legacy spreadsheets, and supplier websites. Catalog teams spend hours copying values, normalizing units, resolving conflicts, and checking mandatory fields. ProductIQ demonstrates one workflow for making that process faster without removing human oversight.

## Demo workflow

1. Create an intelligence project from the top-right action.
2. Add product details and source documents.
3. Watch the extraction, enrichment, validation, and scoring pipeline run.
4. Inspect the generated product profile and its source evidence.
5. Approve or reject uncertain attributes in the validation queue.
6. Compare products, explore relationships, and configure an export.

The repository uses representative local data so the complete journey works without API keys or external services.

## Features

- Catalog health dashboard and processing metrics
- Searchable industrial product profiles
- Field-level confidence and source traceability
- Human validation queue with review actions
- Side-by-side product comparison
- Product knowledge graph and quality analytics
- JSON, CSV, Excel, XML, and API export configuration
- Responsive light and dark themes

## Tech stack

- React 19 and TypeScript
- Next.js 16 with the App Router
- CSS design system in `app/globals.css`
- Node test runner for server-render smoke tests
- ESLint with React, accessibility, and TypeScript rules

## Project structure

```text
app/
├── hooks/
│   └── use-search-shortcut.ts   # Global keyboard interaction
├── lib/
│   └── product-data.ts          # Domain types and demo fixtures
├── globals.css                  # Tokens, components, and responsive styles
├── layout.tsx                   # Metadata and root document
└── page.tsx                     # Application shell and feature views
db/                              # Drizzle schema and database entry point
tests/                           # Server-render and workflow smoke tests
vercel.json                      # Vercel framework configuration
```

## Local development

Requires Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

Open the URL printed by the development server.

## Quality checks

```bash
npm run lint
npm test
```

`npm test` creates a production build before running the server-render tests, so it also catches bundling and route failures.

## Production roadmap

The current submission focuses on a reliable, judge-friendly end-to-end prototype. The component boundaries are ready for PostgreSQL/D1 persistence, R2/S3 document storage, OCR and extraction services, vector retrieval, organization authentication, and PIM/ERP publishing integrations.
