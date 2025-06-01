import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NiftyStocksListComponent } from './components/nifty-stocks-list/nifty-stocks-list.component'; // Import new component

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NiftyStocksListComponent], // Add to imports
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class AppComponent {
  title = 'indian-stock-analyzer';
}
