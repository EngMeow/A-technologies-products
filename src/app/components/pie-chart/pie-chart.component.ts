import { Component, ViewChild } from "@angular/core";

import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart,
  ApexFill,
  ChartComponent,
  ApexStroke
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
  stroke: ApexStroke;
};

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [250],
      chart: {
        height: 110,
        type: "radialBar",
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        radialBar: {
          startAngle: -90,
          endAngle: 135,

        
          hollow: {
            margin: 0,
            size: "70%",
            background: "#fff",
            image: undefined,
            position: "front",
            
            // dropShadow: {
            //   enabled: true,
            //   top: 3,
            //   left: 0,
            //   blur: 4,
            //   opacity: 0.24
            // }
          },
          track: {
            background: "#fff",
            strokeWidth: "120px",
            margin: 0, // margin is in pixels
            // dropShadow: {
            //   enabled: true,
            //   top: -3,
            //   left: 0,
            //   blur: 4,
            //   opacity: 0.35
            // }
          },

          dataLabels: {
            show: true,
            
            value: {
              formatter: function(val) {
                return parseInt(val.toString(), 10).toString();
              },
              color: "#111",
              fontSize: "12px",
              fontFamily:'ArabicFont',
              fontWeight:'bold',
              offsetY: -15,
              show: true
            },
            name: {
              offsetY: 12,
              show: true,
              color: "#83899F",
              fontSize: "8px",
              fontFamily:'ArabicFont'
            },
          }
        }
      },
      
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "horizontal",
          shadeIntensity: 0,
          gradientToColors: ["#64B0FF"],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0,50, 100]
        }
      },
      stroke: {
        show: true,
        curve: 'stepline',
        lineCap: 'round',
        colors: ['red'],
        width: 1,
        dashArray: 0, 
    },    

      labels: ["خدمة"]
    };
  }
}