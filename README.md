# FastAPI Vue SPA Boilerplate

Minimal FastAPI + Vue SPA setup.

## Quick Start

```bash
git clone https://github.com/CodingCru/fastapi-vue-spa-boilerplate.git
cd fastapi-vue-spa-boilerplate
./bootstrap_local.sh
```

## Development

```bash
# Backend
cd backend && source .venv/bin/activate && uvicorn app.main:app --reload

# Frontend
cd frontend && pnpm dev

# E2E testing
cd frontend && pnpm test:e2e

```

- Frontend: http://localhost:3000
- Backend: http://localhost:8000
- API Docs: http://localhost:8000/docs
