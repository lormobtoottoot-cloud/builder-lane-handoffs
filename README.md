# Builder Lane Handoffs

Safe builder lane files for two separate lanes:

- Spark Builder Lane for Aunt
- TradeCore UI Lane for younger aunt / sister

## Open First

Spark builder opens:

```text
spark/builder-start-interface/spark-builder-start.html
```

TradeCore UI builder opens:

```text
tradecore-ui/index.html
```

## Packages

Download-ready zip files are in `packages/`:

- `Spark_Builder_Lane.zip`
- `TradeCore_UI_Lane.zip`
- `Builder_Lanes_All.zip`

## Safety Boundaries

This repository intentionally excludes:

- CORE_Vault_RE_200_Blocks
- Operator server files
- CellCore PC Flow Agent files
- Wallet, vault, bank, security, backend, terminal, or API-key files

TradeCore is UI mock only. No live trading, no Coinbase keys, no API keys, no wallet movement, no backend trading logic, and no terminal logic.

Spark remains a separate lane. The starter interface is a mock sandbox and does not modify the Spark production source.
