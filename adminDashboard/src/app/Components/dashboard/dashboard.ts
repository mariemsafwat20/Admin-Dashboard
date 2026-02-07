import { Component } from '@angular/core';
import { AnalyticsCardsComponent } from "./sections/analytics-card/analytics-card";
import { Charts } from "./sections/charts/charts";
import { Products } from "./sections/products/products";

@Component({
  selector: 'app-dashboard',
  imports: [AnalyticsCardsComponent, Charts, Products],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {

}
