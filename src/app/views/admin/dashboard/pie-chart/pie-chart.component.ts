import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit{
  public chart: any;
  
  public nbRecTraiter: any ;
  public nbRecNonTraiter: any ;

  constructor(private http:HttpClient) {}
  ngOnInit(): void {

    this.getRec()
    setTimeout(() => {
      console.log(this.nbRecTraiter)
      console.log(this.nbRecNonTraiter)
    this.createChart();
      
    }, 1000);

  }

  getRec(): void {
    this.http.get('/api/SpringMVC/Rec/reclam/TRAITER').subscribe((data) => {
      this.nbRecTraiter = Object.keys(data).length
      console.log(this.nbRecTraiter)

    })
    this.http.get('/api/SpringMVC/Rec/reclam/NONTRAITER').subscribe((data) => {
      this.nbRecNonTraiter = Object.keys(data).length

      console.log(this.nbRecNonTraiter)
    })
  }

  createChart(){

    this.chart = new Chart("MyChart", {
      type: 'pie', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['traiter', 'non traiter'],
	       datasets: [{
    label: 'les reclamation traiter et non traiter',
    data: [this.nbRecTraiter, this.nbRecNonTraiter],
    backgroundColor: [
			'#A6D0DD',
      '#FF6969',
    ],
    hoverOffset: 4
  }],
      },
      options: {
        aspectRatio:2.5
      }

    });
  }

}
