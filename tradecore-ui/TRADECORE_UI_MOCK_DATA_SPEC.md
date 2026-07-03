# TradeCore UI Mock Data Spec

All data in this lane is static mock data. No external APIs are allowed.

## Required Mock Objects

- mockPortfolio
- mockWatchlist
- mockTransactions
- mockConnectorStatus
- mockRiskWarnings
- mockAgentMessages

## Rules

- Values may look realistic but must not be live.
- Do not import keys or environment variables.
- Do not connect to Coinbase or any exchange.
- Do not create order payloads for real execution.
- Buy/sell controls must be disabled or labeled mock-only.
