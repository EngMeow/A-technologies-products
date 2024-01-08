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
      series: [70],
      chart: {
        height: 110,
        type: "radialBar",
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
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
            background: "#E6ECF5",
            strokeWidth: "100px",
            margin: 0, // margin is in pixels
            dropShadow: {
              top: -3,
              left: 0,
              blur: 2,
              opacity: 0.35
            }
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
              color: "#000",
              fontSize: "8px",
              fontFamily:'ArabicFont'
            },
          }
        }
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          type: "horizontal",
          shadeIntensity: 0.9,
          gradientToColors: ["#0771DE"],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 53, 91]
        }
      },
      stroke: {
        show: true,
        curve: 'stepline',
        lineCap: 'round',
    },    

      labels: ["خدمة"]
    };
  }
}


// import { Component, ViewChild } from "@angular/core";
// import { ChartComponent } from "ng-apexcharts";

// import {
//   ApexNonAxisChartSeries,
//   ApexResponsive,
//   ApexChart
// } from "ng-apexcharts";

// export type ChartOptions = {
//   series: ApexNonAxisChartSeries;
//   chart: ApexChart;
//   responsive: ApexResponsive[];
//   labels: any;
// };

// @Component({
//   selector: "app-pie-chart",
//   templateUrl: "./pie-chart.component.html",
//   styleUrls: ["./pie-chart.component.css"]
// })
// export class PieChartComponent {
//   @ViewChild("chart") chart: ChartComponent;
//   public chartOptions: Partial<ChartOptions>;

//   constructor() {
//     this.chartOptions = {
//       series: [10, 20, 30],
//       chart: {
//         type: "donut"
//       },
//       labels: ["Team A", "Team B", "Team C"],
//       responsive: [
//         {
//           breakpoint: 480,
//           options: {
//             plotOptions: {
//               pie: {
//                 startAngle: 45,
//                 endAngle: 360,
//                 expandOnClick: false,
//                 offsetX: 0,
//                 offsetY: 0,
//                 customScale: 1,
//                 dataLabels: {
//                     offset: 0,
//                     minAngleToShowLabel: 3

//                 }, 
//                 markers: {
//                   size: 0,
//                   colors: undefined,
//                   strokeColors: '#000',
//                   strokeWidth: 2,
//                   strokeOpacity: 0.9,
//                   strokeDashArray: 0,
//                   fillOpacity: 1,
//                   discrete: [],
//                   shape: "circle",
//                   radius: 2,
//                   offsetX: 0,
//                   offsetY: 0,
//                   onClick: undefined,
//                   onDblClick: undefined,
//                   showNullDataPoints: true,
//                   hover: {
//                     size: undefined,
//                     sizeOffset: 3
//                   }
//               },
//                 donut: {
//                   size: '10%',
//                   background: 'transparent',
//                   labels: {
//                     show: true,
//                     name: {
//                       show: true,
//                       fontSize: '22px',
//                       fontFamily: 'Helvetica, Arial, sans-serif',
//                       fontWeight: 600,
//                       color: undefined,
//                       offsetY: -10,
//                       formatter: function (val) {
//                         return val
//                       }
//                     },
//                     value: {
//                       show: true,
//                       fontSize: '16px',
//                       fontFamily: 'Helvetica, Arial, sans-serif',
//                       fontWeight: 400,
//                       color: undefined,
//                       offsetY: 16,
//                       formatter: function (val) {
//                         return val
//                       }
//                     },
//                     total: {
//                       show: false,
//                       showAlways: false,
//                       label: 'Total',
//                       fontSize: '22px',
//                       fontFamily: 'Helvetica, Arial, sans-serif',
//                       fontWeight: 600,
//                       color: '#373d3f',
//                       formatter: function (w) {
//                         return w.globals.seriesTotals.reduce((a, b) => {
//                           return a + b
//                         }, 0)
//                       }
//                     }
//                   }
//                 },      
//               }
//             }
//         }
//       }
//       ]
//     };
//   }
// }
