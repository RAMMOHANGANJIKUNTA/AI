export interface StockItem {
  symbol: string;
  name: string;
  currentPrice: number;
  change: number;
  changePercentage: number;
  // We can add more fields later, like open, high, low, volume, etc.
}
