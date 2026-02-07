import { Component } from '@angular/core';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { ChartOptions, ChartType, ChartDataset, ChartConfiguration, ChartData, ChartTypeRegistry } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';
@Component({
  selector: 'app-charts',
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardTitle,
    NgChartsModule
  ],
  templateUrl: './charts.html',
  styleUrl: './charts.scss',
})
export class Charts {
  // Chart Type
  lineChartType: 'line' = 'line';

  // Line Chart
  lineChartData: ChartData<'line', number[], string> = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [ { data: [20000, 50000, 70000, 100000], label: 'Sales' }]
  };

  // Chart Options with currency formatting
  private yAxisValues = [20000, 50000, 70000, 100000];
  lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    scales: {
      y: {
        ticks: {
          // Only display tick if it exists in yAxisValues
          callback: (value) => {
            if (this.yAxisValues.includes(Number(value))) {
              return '$' + (Number(value) / 1000) + 'k';
            }
            return '';
          }
        }
      }
    }
  };

  // Bar Chart - Visits
  barChartType: ChartType = 'bar';
  barChartLabels = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  barChartData: ChartDataset[] = [
    {
      data: [30, 80, 60, 30, 70, 15, 10],
      label: 'Visits',
      backgroundColor: '#0561FC',
      borderRadius: 5,
      barPercentage: 0.5
    }
  ];

  barChartOptions: ChartOptions = {
    responsive: true,
    plugins: { legend: { display: false }, tooltip: { enabled: true } },
    scales: {
      // removes vertical grid lines
      x: { grid: { display: false},
        // keep x-axis labels (M, T, W…)
        ticks: { display: true}
      },
      // removes horizontal grid lines
      y: { grid: { display: false },
        // hide y-axis numbers
        ticks: { display: false }
      }
    }
  }  
}
