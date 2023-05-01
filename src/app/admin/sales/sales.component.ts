import { Component, OnInit } from '@angular/core';
import { Chart, ChartConfiguration, ChartItem, registerables } from "chart.js"
@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  ngOnInit(): void {
    this.createChart();
  }

  createChart(): void {
    Chart.register(...registerables);
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May'],
      datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [10, 5, 20, 20, 30, 45],
      },
      {
        label: 'My Second dataset',
        backgroundColor: 'rgb(122, 99, 132)',
        borderColor: 'rgb(200, 99, 132)',
        data: [5, 15, 20, 12, 75, 80],
      }]
    };

    const options = {
      scales: {
        y: {
          beginAtZero: true,
          display: false
        }
      }
    }
    const config: ChartConfiguration = {
      // type: 'line',
      type: 'bar',
      data: data,
      options: options
    }

    const chartItem: ChartItem = document.getElementById('my-chart') as ChartItem
    new Chart(chartItem, config)

  }
}
