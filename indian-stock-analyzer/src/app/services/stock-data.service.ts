import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs'; // 'throwError' is removed as it's no longer used by handleError
import { catchError, tap } from 'rxjs/operators';
import { StockItem } from '../models/stock-item.model';

@Injectable({
  providedIn: 'root'
})
export class StockDataService {

  private nifty50ApiUrl = '/api/nifty50-stocks';

  constructor(private http: HttpClient) { }

  getNifty50Stocks(): Observable<StockItem[]> {
    console.log('StockDataService: Attempting to fetch live data from backend at ' + this.nifty50ApiUrl);
    return this.http.get<StockItem[]>(this.nifty50ApiUrl)
      .pipe(
        tap(data => console.log('StockDataService: Fetched data:', data)),
        catchError(this.handleError) // Error handled by returning an empty array
      );
  }

  private handleError(error: HttpErrorResponse): Observable<StockItem[]> { // Changed return type
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Client-side error: ${error.error.message}`;
    } else {
      errorMessage = `Backend returned code ${error.status}, body was: ${JSON.stringify(error.error)}`;
    }
    console.error('StockDataService: Error fetching stocks -', errorMessage);
    // Return an empty array to allow the component to display an empty list or a specific message.
    return of([]); // Return Observable of empty array
  }
}
