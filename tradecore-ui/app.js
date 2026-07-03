const mockPortfolio = [
  { symbol: 'BTC', name: 'Bitcoin', amount: '0.1824', value: 11842.2, change: '+1.8%' },
  { symbol: 'ETH', name: 'Ethereum', amount: '2.42', value: 7420.44, change: '-0.6%' },
  { symbol: 'USDC', name: 'USD Coin', amount: '2450.00', value: 2450, change: '0.0%' },
];

const mockWatchlist = [
  { symbol: 'SOL', price: '$148.20', movement: '+2.4%' },
  { symbol: 'AVAX', price: '$31.88', movement: '-1.1%' },
  { symbol: 'LINK', price: '$14.70', movement: '+0.9%' },
];

const mockTransactions = [
  { label: 'Mock receive BTC', status: 'simulated', amount: '+0.002 BTC' },
  { label: 'Mock swap preview', status: 'blocked', amount: 'No execution' },
  { label: 'Mock portfolio rebalance', status: 'analysis only', amount: '$0 moved' },
];

const mockConnectorStatus = [
  { name: 'Coinbase', status: 'mock disconnected' },
  { name: 'Kraken', status: 'preview only' },
  { name: 'Robinhood', status: 'preview only' },
  { name: 'WalletConnect', status: 'disabled' },
];

const mockRiskWarnings = [
  'UI mock only - no live trading.',
  'No real Coinbase keys or API keys are stored here.',
  'Buy/sell controls are disabled and cannot move funds.',
];

const mockAgentMessages = [
  'Analysis mode only. I can summarize mock portfolio exposure.',
  'No order placement tools are connected.',
  'Risk screen should remain visible before any future execution design.',
];

function money(value) {
  return value.toLocaleString(undefined, { style: 'currency', currency: 'USD' });
}

function row(left, right, sub) {
  return `<div class="row"><span>${left}${sub ? `<small>${sub}</small>` : ''}</span><strong>${right}</strong></div>`;
}

const portfolioTotal = mockPortfolio.reduce((sum, asset) => sum + asset.value, 0);
document.querySelector('#portfolioTotal').textContent = money(portfolioTotal);
document.querySelector('#portfolioList').innerHTML = mockPortfolio.map((asset) => row(`${asset.symbol} - ${asset.name}`, money(asset.value), `${asset.amount} units | ${asset.change}`)).join('');
document.querySelector('#watchlist').innerHTML = mockWatchlist.map((asset) => row(asset.symbol, asset.price, asset.movement)).join('');
document.querySelector('#connectors').innerHTML = mockConnectorStatus.map((connector) => row(connector.name, connector.status)).join('');
document.querySelector('#coinbaseStatus').textContent = mockConnectorStatus[0].status;
document.querySelector('#agentMessages').innerHTML = mockAgentMessages.map((message) => row(message, 'mock')).join('');
document.querySelector('#transactions').innerHTML = mockTransactions.map((tx) => row(tx.label, tx.amount, tx.status)).join('');
document.querySelector('#riskWarnings').innerHTML = mockRiskWarnings.map((warning) => `<div class="risk-item">${warning}</div>`).join('');
