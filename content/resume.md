# Chibueze Aniezeofor

**Backend Engineer** · Node.js · TypeScript · AI Systems

📍 Nigeria (Remote) &nbsp;|&nbsp; 🌐 [codad5.me](https://codad5.me) &nbsp;|&nbsp; ✉️ [aniezeoformic@gmail.com](mailto:aniezeoformic@gmail.com)
🔗 [linkedin.com/in/chibueze-michael](https://linkedin.com/in/chibueze-michael) &nbsp;|&nbsp; [github.com/codad5](https://github.com/codad5)

---

## Summary

Backend engineer with 5+ years building scalable APIs, AI-powered platforms, and production infrastructure. Known for taking products from zero to scale — architected the backend for AwaDoc from the ground up to 100,000+ users, processing 240k+ daily messages with live payment flows. Also builds systems-level projects from scratch, including a custom binary tunneling protocol and multi-tenant TLS/ACME infrastructure (raba). Comfortable owning complex backend systems end-to-end, from system design to production deployment. Background in Mechanical Engineering sharpens how I approach systems thinking and performance under constraints.

---

## Technical Skills

|                        |                                                                       |
| ---------------------- | --------------------------------------------------------------------- |
| **Languages**          | TypeScript, JavaScript, PHP, Rust, Python                             |
| **Backend & APIs**     | Node.js, NestJS, Express.js, Laravel, FastAPI                         |
| **Databases**          | PostgreSQL, MySQL, MongoDB, Redis                                     |
| **AI & LLMs**          | OpenAI API, DeepSeek, Qdrant (vector search), prompt engineering      |
| **Infrastructure**     | Docker, GitHub Actions, Prometheus, Grafana, Loki, Linux server admin |
| **Queues & Messaging** | BullMQ, RabbitMQ, Celery, WhatsApp Business API                       |
| **Frontend**           | React, Next.js, Tailwind CSS                                          |
| **Other**              | WebSockets, REST APIs, OAuth 2.0, CLI development, SQLAlchemy         |

---

## Experience

### Founding Engineer — AwaDoc _(AI Health Startup, Nigeria)_

`January 2024 – Present`

AwaDoc is an AI-driven health assistant that gives Nigerians access to reliable medical guidance via WhatsApp.

- Architected the full backend from scratch — API layer, WhatsApp bot infrastructure, Admin web app, and payment systems — scaling to **100,000+ active users** across multiple Nigerian states.
- Engineered a message processing pipeline handling **240,000+ daily messages**, with ~30% converting to paid transactions.
- Engineered a high-throughput queue system capable of sustaining **10,000+ messages per hour** with consistent reliability under load.
- Integrated OpenAI and DeepSeek for natural language processing; led prompt optimization work that reduced AI hallucinations by **40%**.
- Led security hardening after an early breach: enforced Redis auth, Docker network isolation, SSL termination, and access controls.
- Stack: Node.js, NestJS, Express, MongoDB, Redis, BullMQ, Docker, Qdrant, OpenAI, WhatsApp Business API.

---

### Contract WordPress Plugin Developer — Fusion Intelligence _(Nigeria)_

`December 2024 – Present`

- Developed custom WordPress themes and plugins that improved product delivery speed and reliability for the company's client base.
- Maintained **99.9% uptime** across deployed plugins; optimized workflow efficiency by 40% and increased user engagement by 50% through responsive design improvements.

---

### PHP Developer — Cyberinfomatic _(Nigeria)_

`March 2024 – December 2024`

- Shipped a real-time crypto price tracking plugin for WordPress using PHP.
- Developed a Laravel-based License Management System, cutting validation time by **60%** via Redis caching.
- Secured WordPress.org plugin approval within 2 weeks of submission; boosted overall plugin performance by 70%.

---

### Backend Developer — Appsthathelps _(Mobile App Agency)_

`July 2023 – August 2024`

- Designed and maintained Laravel APIs powering a mobile app with **5,000+ downloads**.
- Integrated OneSignal push notifications; sustained 99.9% API uptime across production.
- Automated recurring data updates via PHP cron jobs, reducing manual engineering work by 90%.

---

### Backend Developer — Clusterlearn _(Learning Platform)_

`January 2023 – June 2023`

- Implemented a Node.js learner-matching system that improved platform retention by 40%.
- Integrated Google Calendar API to streamline scheduling, improving efficiency by 50%.
- Strengthened authentication security with Redis-based email validation mechanisms.

---

### Freelance PHP & Web Developer _(Upwork)_

`2020 – Present`

- Delivered 10+ production websites and 5+ open-source contributions across industries; 90% client satisfaction rating.
- Delivered custom PHP plugins, scrapers, and dashboards for startups and NGOs.

---

## Projects

### raba — Self-Hosted Tunneling Platform _(ngrok/Cloudflare Tunnel Alternative, Open Source)_

`Rust · TypeScript/React · Docker · GitHub Actions` · [codad5.github.io/raba](https://codad5.github.io/raba) · [github.com/codad5/raba](https://github.com/codad5/raba)

- Designed and implemented a custom multiplexed binary protocol over TLS from scratch — no WebSocket, no HTTP-over-HTTP — tunneling HTTP, TCP, and UDP traffic over a single persistent connection per client.
- Architected a multi-tenant RBAC system with three isolated credential types (JWT sessions, PATs, tunnel secrets); found and fixed a domain-hijack security gap via transactional project revocation.
- Automated Let's Encrypt certificate issuance/renewal via delegated DNS-01, enabling per-tenant custom domains without the platform ever holding third-party DNS credentials.
- Shipped a full CI/CD pipeline (GitHub Actions) publishing Docker images to GHCR and cross-platform CLI binaries (Linux/macOS/Windows) on tagged releases; 176 tests passing, clippy-clean across the workspace.

---

### FLI — Rust CLI Framework _(Open Source)_

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

### Google Task Client — Desktop App

`Tauri (Rust) · React · TypeScript · Google Tasks API`

- Cross-platform desktop app built with Tauri for native performance. Launched to **1,000+ users**.

---

## Education

**B.Eng, Mechanical Engineering** — University of Nigeria, Nsukka
`Graduated 2025`
