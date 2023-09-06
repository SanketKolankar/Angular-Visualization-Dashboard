import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'node_modules/chart.js'
import { DataService } from '../service/data.service';
Chart.register(...registerables);

@Component({
  selector: 'app-mychart',
  templateUrl: './mychart.component.html',
  styleUrls: ['./mychart.component.css']
})
export class MychartComponent implements OnInit {

  constructor(private service: DataService) { }

  chartdata: any;

  labeldata: any[] = [];
  realdata: any[] = [];
  colordata: any[] = [];

  ngOnInit(): void {
    this.service.Getchartinfo().subscribe(result => {
      this.chartdata = result;
      if (this.chartdata != null) {
        for (let i = 0; i < this.chartdata.length; i++) {
          this.labeldata.push(this.chartdata[i].year);
          this.realdata.push(this.chartdata[i].amount);
          this.colordata.push(this.chartdata[i].colorcode);
        }
        
        this.RenderChart(this.labeldata, this.realdata, this.colordata, 'bar', 'barchart');
        this.RenderChart(this.labeldata, this.realdata, this.colordata, 'scatter', 'scchart');
        this.RenderChart(this.labeldata, this.realdata, this.colordata, 'line', 'linechart');
        this.RenderChart(this.labeldata, this.realdata, this.colordata, 'pie', 'piechart');
        this.RenderChart(this.labeldata, this.realdata, this.colordata, 'doughnut', 'dochart');
        this.RenderChart(this.labeldata, this.realdata, this.colordata, 'radar', 'rochart');
      }
    });
  }

  RenderChart(labeldata: any, maindata: any, colordata: any, type: any, id: any) {
    const myChart = new Chart(id, {
      type: type,
      data: {
        labels: labeldata,
        datasets: [{
          //label: '# of Votes',
          data: maindata,
          backgroundColor: colordata,
          // borderColor: [
          //   'rgba(255, 99, 132, 1)'
          // ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

  }
}
