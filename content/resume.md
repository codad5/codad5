# Chibueze Aniezeofor

Backend Engineer — Node.js · TypeScript · Distributed Systems · AI

Nigeria (Remote) | [aniezeoformic@gmail.com](mailto:aniezeoformic@gmail.com) | [codad5.me](https://codad5.me) | [github.com/codad5](https://github.com/codad5) | [linkedin.com/in/chibueze-aniezeofor](https://linkedin.com/in/chibueze-aniezeofor)

---

## Summary

Backend engineer with 6 years building scalable APIs, AI-powered platforms, and production infrastructure. As founding engineer, built out AwaDoc's backend and guided much of the engineering as the platform grew to 200,000+ users on WhatsApp, with live payments and a queue engineered to sustain peak loads of ~10,000 messages/hour. Equally at home in low-level systems — designed a custom multiplexed binary protocol over TLS and an event-sourced financial ledger from scratch. Owns backend systems end-to-end, from design to production, and builds for testability by default.

---

## Experience

### Founding Engineer — AwaDoc *(AI Health Startup)*
`January 2024 – Present`

- Architected the full backend from scratch — API layer, WhatsApp bot infrastructure, admin web app, and payment flows — scaling to **200,000+ registered users** across multiple Nigerian states.
- Engineered a message-processing pipeline and queue system to sustain peak loads of **~240,000 messages/day and ~10,000 messages/hour** under reliability constraints.
- Established the engineering quality bar: **2,000+ automated tests** and a factory-pattern architecture that keeps every component independently mockable and testable.
- Implemented AwaDoc's multi-tenant partner integration platform (2-engineer team) handling **10,000+ events/day** — delivered the partner-facing event-logging/observability system and a shared-core live/sandbox environment with unified login across both modes.
- Integrated OpenAI and DeepSeek for medical guidance; led prompt engineering and evaluation to reduce incorrect responses.
- Stack: Node.js, NestJS, Express, MongoDB, Redis, BullMQ, Docker, Qdrant, OpenAI, WhatsApp Business API.

### Founder & Lead Engineer — Ridox Studio *(Independent Studio)*
`2022 – Present`

- Founded an independent studio building web, mobile, cloud, and AI products; own architecture and delivery end-to-end.
- Develop and operate in-house products including **RISMS** (multi-tenant school-management SaaS), **Cilbup** (anonymous creator messaging/tipping), and **Resurgee** (AI task orchestration).
- Building **Netcart**, a multi-audience marketplace, end-to-end — mobile app, backend, and admin portal — including a server-driven home screen the owner reconfigures (content and ordering) without shipping an app update.
- Deliver client engagements from discovery and architecture through to deployment and handover.

*Earlier (2020–2024): backend and PHP/Laravel roles across Fusion Intelligence, Cyberinfomatic, and Appsthathelps, plus freelance web and plugin development on Upwork.*

---

## Selected Projects

### raba — Self-Hosted Tunneling Platform *(Open Source, ngrok alternative)*
`Rust · TypeScript/React · Docker · GitHub Actions` · [github.com/codad5/raba](https://github.com/codad5/raba)

- Designed and implemented a custom multiplexed binary protocol over TLS from scratch — tunneling HTTP, TCP, and UDP over a single persistent connection per client, with no WebSocket or HTTP-over-HTTP dependency.
- Architected a multi-tenant RBAC system with three isolated credential types (JWT sessions, PATs, tunnel secrets); identified and closed a domain-hijack window via transactional project revocation.
- Automated Let's Encrypt issuance and renewal via delegated DNS-01, enabling per-tenant custom domains without the platform ever storing third-party DNS credentials.
- Shipped full CI/CD publishing Docker images to GHCR and cross-platform CLI binaries (Linux, macOS, Windows); 176 tests passing, clippy-clean.

### RISMS — Multi-Tenant School Management SaaS
`PHP 8.3 · Laravel · PostgreSQL · Vue 3 · Inertia.js · Docker` · [risms.school](https://risms.school)

- Built a multi-tenant platform, in production for a live school, supporting three tenant-resolution strategies (path prefix, wildcard subdomain, customer-owned custom domain) behind a single shared route and controller layer — no route duplication across access methods.
- Designed an event-sourced financial subsystem: wallet balances computed as a fold over a multi-currency-ready append-only transaction log (never a mutable column), money as a value object in minor units, and pluggable per-institution payment providers with encrypted per-tenant credentials and per-tenant webhook verification (Paystack + cash).
- Developed a memory-bounded three-pass streaming CSV/XLSX bulk-import pipeline with per-row transactional isolation, keeping memory flat regardless of file size so one bad row never aborts the batch.
- Enforced PHPStan/Larastan static analysis and a 780+ test suite as real merge gates, catching cross-tenant boundary leaks and forged webhook signatures before deployment.

### FLI — Rust CLI Framework *(Open Source)*
`Rust` · [crates.io/crates/fli](https://crates.io/crates/fli) · [github.com/codad5/fli](https://github.com/codad5/fli)

- Type-safe CLI library for Rust inspired by commander.js — **12,000+ downloads** on crates.io; hierarchical commands, compile-time guarantees, and auto-generated help from Cargo metadata.

### Resurgee — AI Task Orchestration *(Ridox Studio)*
`Python · FastAPI · PostgreSQL · Celery · OpenAI`

- Natural-language task creation and smart rescheduling layered over Google Tasks and Calendar, with bidirectional sync across multiple accounts.
- Unified OAuth flow handling user authentication and multi-calendar linking in a single callback.

---

## Technical Skills

**Languages:** TypeScript, JavaScript, PHP, Rust, Python  
**Backend & APIs:** Node.js, NestJS, Express, Laravel, FastAPI, REST, WebSockets, OAuth 2.0  
**Databases:** PostgreSQL, MySQL, MongoDB, Redis  
**Queues & Messaging:** BullMQ, RabbitMQ, Celery, WhatsApp Business API  
**AI & LLMs:** OpenAI, DeepSeek, Qdrant (vector search), prompt engineering & evaluation  
**Infrastructure:** Docker, GitHub Actions, Linux server admin, Prometheus, Grafana, Loki  
**Frontend:** React, Next.js, Vue 3, Inertia.js, Tailwind CSS  

---

## Education

**B.Eng, Mechanical Engineering** — University of Nigeria, Nsukka · 2025