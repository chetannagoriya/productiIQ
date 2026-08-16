# ProductIQ AI

ProductIQ AI is a responsive industrial product intelligence workspace that turns fragmented product documents into structured, traceable, commerce-ready data.

## Included MVP workflow

- Dashboard with quality, completeness, confidence, activity, and review metrics
- Five realistic industrial demo products
- New intelligence project form with simulated file ingestion
- Ten-step multi-agent processing workflow
- Product profiles with field-level confidence and source citations
- Source evidence panel with highlighted document evidence and score explanation
- Human validation queue with approve, reject, edit, comments, and audit feedback
- Catalog management, product comparison, knowledge graph, and analytics
- JSON, CSV, Excel, XML, and API export configuration
- Responsive light and dark interfaces

All data and AI activity are simulated for the prototype. The component boundaries are ready to connect to real ingestion, extraction, classification, enrichment, validation, vector search, graph, and publishing services.

## Run locally

Requirements: Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

Open the local URL printed in the terminal. Create a project from the top-right button to run the complete demo journey.

## Verify a production build

```bash
npm run build
```

## Architecture

- `app/page.tsx` — interactive application shell and end-to-end demo flows
- `app/globals.css` — responsive enterprise design system and dark mode
- `public/og.png` — ProductIQ social preview asset
- `.openai/hosting.json` — Sites deployment configuration

The prototype intentionally keeps its demo state in the browser. A production implementation can add PostgreSQL/D1 persistence, R2/S3 document storage, Qdrant/Pinecone retrieval, Neo4j relationships, API routes, and organization-scoped authentication without changing the core user flows.
