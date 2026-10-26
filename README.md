# Tredge

Mostly-automated investing system. Modular monolith, TypeScript everywhere, one
monorepo — not microservices. Markets are plugins, not assumptions: crypto is
pack one, US equities and NGX are analysis-only packs that plug in through the
same connector / canonical / strategy seams.

## Working loop

Spec → build → CI → rubric review → **human merge**. Dyenaan merges, always.
No Codex on this repo: Muse plans and reviews, the human is the gate.

## Locked decisions this scaffold carries

- Stack ratified in #1: pnpm workspaces, Expo control tower, Fastify + Zod API,
  Postgres + TimescaleDB with Drizzle, Redis Streams + BullMQ, R2/MinIO +
  Parquet/DuckDB, Docker Compose on one VPS behind Caddy.
- Risk caps locked in #2 — see `packages/config/src/risk.ts`. Identical in
  backtest, paper, and live. Loosening needs a new decision record.
- Strategy #1 in #3: arbitrage, spot-perp basis/funding first (Coinbase spot ↔
  Hyperliquid perp, BTC/ETH/SOL, delta-neutral), DEXs / cross-exchange second.
- Strategy proof test locked in #6: a strategy must pass train / validate /
  single-use hold-out, net of fees/slippage/funding, plus 30 days of paper
  trading with parity, before any live consideration. Perps stay on Hyperliquid
  testnet until the separate live perps gate.

## Run it

```sh
pnpm install
pnpm -r build
pnpm test
docker compose up -d   # postgres-timescale, redis, minio, caddy stub
docker compose ps      # all services healthy
```

## Layout

- `apps/` — one folder per process (api, connector-runtime, news-ingestor,
  scoring-worker, strategy-runner, backtest-worker, paper-engine,
  risk-execution, scheduler) plus the control-tower client stub.
- `packages/` — canonical, connectors (one package per source, plus the shared
  contract-test suite), market-rules, strategy-core, strategies,
  venue-adapters, shared-types, config, datasets.
- `config/markets.yaml` — which connectors/instruments are switched on.
- `config/labels.json` — the 31 labels, as code, so they stay in sync.
- `infra/caddy/Caddyfile` — stub. Production Caddy routes to `api` only.

## Scaffold scope

This is issue #5 only: the empty structure, with placeholder entry points.
No connector, strategy, or engine implementation lives here yet. Secrets are
server-side environment only; the app never holds trading keys.

## CI note

`.github/workflows/ci.yml` is prepared in this branch's local scaffold but is
**not** pushed by the Muse GitHub App, which lacks the Workflows permission.
Add it via the GitHub web UI on this branch (see the comment at the top of
that file), and CI will run build + test + format check on this PR.
