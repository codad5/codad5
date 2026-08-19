# Chibueze Aniezeofor
**Backend Engineer** · Node.js · TypeScript · AI Systems

📍 Nigeria (Remote) &nbsp;|&nbsp; 🌐 [codad5.me](https://codad5.me) &nbsp;|&nbsp; ✉️ [aniezeoformic@gmail.com](mailto:aniezeoformic@gmail.com)
🔗 [linkedin.com/in/chibueze-michael](https://linkedin.com/in/chibueze-michael) &nbsp;|&nbsp; [github.com/codad5](https://github.com/codad5)

---

## Summary

Backend engineer with 5+ years building scalable APIs, AI-powered platforms, and production infrastructure. Known for taking products from zero to scale — architected the backend for AwaDoc from the ground up to 100,000+ users, processing 240k+ daily messages with live payment flows. Also builds deep systems-level projects from scratch: designed a custom binary tunneling protocol over TLS, multi-tenant RBAC architecture, and automated ACME certificate infrastructure for raba, an open-source ngrok alternative in Rust. Comfortable owning complex backend systems end-to-end, from system design to production deployment. Background in Mechanical Engineering sharpens how I approach systems thinking and performance under constraints.

---

## Technical Skills

| | |
|---|---|
| **Languages** | TypeScript, JavaScript, PHP, Rust, Python |
| **Backend & APIs** | Node.js, NestJS, Express.js, Laravel, FastAPI |
| **Databases** | PostgreSQL, MySQL, MongoDB, Redis |
| **AI & LLMs** | OpenAI API, DeepSeek, Qdrant (vector search), prompt engineering |
| **Infrastructure** | Docker, GitHub Actions, Prometheus, Grafana, Loki, Linux server admin |
| **Queues & Messaging** | BullMQ, RabbitMQ, Celery, WhatsApp Business API |
| **Frontend** | React, Next.js, Vue 3, Inertia.js, Tailwind CSS |
| **Other** | WebSockets, REST APIs, OAuth 2.0, CLI development, SQLAlchemy |

---

## Experience

### Founding Engineer — AwaDoc *(AI Health Startup, Nigeria)*
`January 2024 – Present`

AwaDoc is an AI-driven health assistant that gives Nigerians access to reliable medical guidance via WhatsApp.

- Architected the full backend from scratch — API layer, WhatsApp bot infrastructure, Admin web app, and payment systems — scaling to **100,000+ active users** across multiple Nigerian states.
- Engineered a message processing pipeline handling **240,000+ daily messages**, with ~30% converting to paid transactions.
- Engineered a high-throughput queue system capable of sustaining **10,000+ messages per hour** with consistent reliability under load.
- Integrated OpenAI and DeepSeek for natural language processing; led prompt optimization work that reduced AI hallucinations by **40%**.
- Led security hardening after an early breach: enforced Redis auth, Docker network isolation, SSL termination, and access controls.
- Stack: Node.js, NestJS, Express, MongoDB, Redis, BullMQ, Docker, Qdrant, OpenAI, WhatsApp Business API.

---

### Contract WordPress Plugin Developer — Fusion Intelligence *(Nigeria)*
`December 2024 – Present`

- Developed custom WordPress themes and plugins that improved product delivery speed and reliability for the company's client base.
- Maintained **99.9% uptime** across deployed plugins; optimized workflow efficiency by 40% and increased user engagement by 50% through responsive design improvements.

---

### PHP Developer — Cyberinfomatic *(Nigeria)*
`March 2024 – December 2024`

- Shipped a real-time crypto price tracking plugin for WordPress using PHP.
- Developed a Laravel-based License Management System, cutting validation time by **60%** via Redis caching.
- Secured WordPress.org plugin approval within 2 weeks of submission; boosted overall plugin performance by 70%.

---

### Backend Developer — Appsthathelps *(Mobile App Agency)*
`July 2023 – August 2024`

- Designed and maintained Laravel APIs powering a mobile app with **5,000+ downloads**.
- Integrated OneSignal push notifications; sustained 99.9% API uptime across production.
- Automated recurring data updates via PHP cron jobs, reducing manual engineering work by 90%.

---

### Backend Developer — Clusterlearn *(Learning Platform)*
`January 2023 – June 2023`

- Implemented a Node.js learner-matching system that improved platform retention by 40%.
- Integrated Google Calendar API to streamline scheduling, improving efficiency by 50%.
- Strengthened authentication security with Redis-based email validation mechanisms.

---

### Freelance PHP & Web Developer *(Upwork)*
`2020 – Present`

- Delivered 10+ production websites and 5+ open-source contributions across industries; 90% client satisfaction rating.
- Delivered custom PHP plugins, scrapers, and dashboards for startups and NGOs.

---

## Projects

### raba — Self-Hosted Tunneling Platform *(Open Source, ngrok alternative)*

`Rust · TypeScript/React · Docker · GitHub Actions` · [github.com/codad5/raba](https://github.com/codad5/raba)

- Designed and implemented a custom multiplexed binary protocol over TLS from scratch — tunneling HTTP, TCP, and UDP traffic over a single persistent connection per client with no WebSocket or HTTP-over-HTTP dependency.
- Architected a multi-tenant RBAC system with three isolated credential types (JWT sessions, PATs, tunnel secrets); identified and closed a domain-hijack security gap via transactional project revocation.
- Automated Let's Encrypt certificate issuance and renewal via delegated DNS-01, enabling per-tenant custom domains without the platform ever storing third-party DNS credentials.
- Shipped a full CI/CD pipeline (GitHub Actions) publishing Docker images to GHCR and cross-platform CLI binaries for Linux, macOS, and Windows on tagged releases; 176 tests passing, clippy-clean across the workspace.

---

### RISMS — Multi-Tenant School Management SaaS

`PHP 8.3 · Laravel · PostgreSQL · Vue 3 · Inertia.js · Docker · Traefik · Cloudflare` · [staging.risms.xyz](https://staging.risms.xyz)

- Architected and built a multi-tenant SaaS platform from scratch supporting three tenant-resolution strategies (path prefix, wildcard subdomain, customer-owned custom domain) behind a single shared route and controller layer — no route duplication across access methods.
- Designed a ledger-first financial subsystem: wallet balances computed from an append-only transaction log (never a mutable column), money as a first-class value object in minor units, and a pluggable per-institution payment provider architecture (encrypted per-tenant credentials, per-tenant webhook signature verification) supporting Paystack and cash without touching call-site code.
- Built a memory-bounded three-pass streaming CSV/XLSX bulk import pipeline — distinct-values pass, user mapping pass, validated import pass — keeping memory flat regardless of file size with per-row transactional isolation so one bad row never aborts the batch.
- Identified and fixed 6+ unbounded-query bugs across production pages (attendance, payment history, wallet ledger, admin dashboard) converting each to properly paginated, indexed queries with deterministic sort keys.
- Enforced strict static analysis (PHPStan/Larastan) and a 780+ automated test suite as real merge gates, catching cross-tenant boundary leaks, nullable-type mismatches, and forged webhook signatures before deployment.

---

### FLI — Rust CLI Framework *(Open Source)*
`Rust` · [crates.io/crates/fli](https://crates.io/crates/fli) · [github.com/codad5/fli](https://github.com/codad5/fli)

- Type-safe CLI library for Rust inspired by commander.js — **12,000+ downloads** on crates.io.
- Supports hierarchical command structures, subcommands, flexible option types, and compile-time guarantees.
- Auto-generates formatted help output with Cargo.toml metadata extraction.

---

### PDFz — High-Performance PDF Extraction Service
`Rust · Node.js · Docker · RabbitMQ · Redis`

- Distributed PDF extraction service with support for both Tesseract and Ollama OCR engines.
- Async queue-based processing via RabbitMQ for concurrent workload management; >85% uptime with retry mechanisms.

---

### Resurgee — AI Task Orchestration Platform
`Python · FastAPI · PostgreSQL · Redis · Celery · OpenAI GPT-4 · Docker`

- AI layer on top of Google Tasks and Calendar: natural language task creation, smart rescheduling based on productivity patterns, bidirectional sync across multiple accounts.
- Unified OAuth flow handling user auth and multi-calendar linking in a single callback.

---

## Education

**B.Eng, Mechanical Engineering** — University of Nigeria, Nsukka
`Graduated 2025`