import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';

interface AnalyticsCard {
  title: string;
  value: string;
  trend?: string;
  trendPositive?: boolean;
  icon: string;
}

@Component({
  selector: 'app-analytics-card',
  imports: [
    MatCard,
    MatCardContent,
    MatIcon,
    CommonModule
  ],
  templateUrl: './analytics-card.html',
  styleUrl: './analytics-card.scss',
})
export class AnalyticsCardsComponent  {
  cards: AnalyticsCard[] = [
    { title: 'Total Revenue', value: '$52.6k', trend: '+3.4%', trendPositive: true, icon: 'attach_money' },
    { title: 'Today Revenue', value: '$1024', trend: '-5.5%', trendPositive: false, icon: 'shopping_cart' },
    { title: 'Items Sold', value: '22', icon: 'inventory_2' },
    { title: 'Users Active', value: '11', icon: 'person' },
  ];

}
