import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StockItem } from '../../models/stock-item.model';
import { StockDataService } from '../../services/stock-data.service';
import { CommonModule } from '@angular/common'; // Import CommonModule for async pipe and ngFor

@Component({
  selector: 'app-nifty-stocks-list',
  standalone: true,
  imports: [CommonModule], // Add CommonModule here for standalone components
  templateUrl: './nifty-stocks-list.component.html',
  styleUrls: ['./nifty-stocks-list.component.scss']
})
export class NiftyStocksListComponent implements OnInit {
  niftyStocks$: Observable<StockItem[]>;

  constructor(private stockDataService: StockDataService) { }

  ngOnInit(): void {
    this.niftyStocks$ = this.stockDataService.getNifty50Stocks();
  }
}
