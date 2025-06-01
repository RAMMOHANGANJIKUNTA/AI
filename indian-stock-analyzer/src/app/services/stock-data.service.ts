import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { StockItem } from '../models/stock-item.model';

@Injectable({
  providedIn: 'root'
})
export class StockDataService {

  private mockNifty50Stocks: StockItem[] = [
    { symbol: 'RELIANCE', name: 'Reliance Industries Ltd.', currentPrice: 2950.75, change: 15.20, changePercentage: 0.52 },
    { symbol: 'HDFCBANK', name: 'HDFC Bank Ltd.', currentPrice: 1450.00, change: -5.50, changePercentage: -0.38 },
    { symbol: 'INFY', name: 'Infosys Ltd.', currentPrice: 1620.90, change: 25.40, changePercentage: 1.59 },
    { symbol: 'ICICIBANK', name: 'ICICI Bank Ltd.', currentPrice: 1080.30, change: 2.10, changePercentage: 0.19 },
    { symbol: 'TCS', name: 'Tata Consultancy Services Ltd.', currentPrice: 3900.00, change: -10.75, changePercentage: -0.28 }
    // Add more Nifty 50 stocks here later if needed
  ];

  constructor() { }

  getNifty50Stocks(): Observable<StockItem[]> {
    return of(this.mockNifty50Stocks);
  }

  // Later, we can add methods to fetch real data, e.g.:
  // getRealNifty50Stocks(): Observable<StockItem[]> {
  //   // HttpClinet logic here
  //   return this.httpClient.get<StockItem[]>('your-api-endpoint/nifty50');
  // }
}
