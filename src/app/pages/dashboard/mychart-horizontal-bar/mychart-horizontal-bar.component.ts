import { Component, OnDestroy, OnInit, Input} from '@angular/core';
import { NbThemeService} from '@nebular/theme';

@Component({
    selector: 'mychart-horizontal-bar',
    templateUrl: 'mychart-horizontal-bar.component.html',
    styleUrls:['mychart-horizontal-bar.component.scss']
})
export class MyChartHorizontalBarComponent implements OnDestroy {
    data:any;
    @Input() hub:any;
    options: any;
    themeSubscription: any;
    forecasted_traffic = [];
    provisioned_capacity = [];
    months = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];


    constructor(private theme: NbThemeService) {
    }
    
    ngOnInit() {
        this.createChart();

    }
   

    createChart(){
        this.forecasted_traffic = [];
        this.provisioned_capacity = [];
        this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
            const colors: any = config.variables;
            const chartjs: any = config.variables.chartjs;
            let values = this.hub.value;
            for(let v of values){
                this.forecasted_traffic.push(v.ft);
                this.provisioned_capacity.push(v.pc);
                
            }
            this.data = {
              labels: this.months,
              datasets: [{
                  label: 'Forecasted_Traffic',
                  backgroundColor: colors.infoLight,
                  borderWidth: 1,
                  data: this.forecasted_traffic,
                }, {
                  label: 'Provisioned_Capacity',
                  backgroundColor: colors.successLight,
                  data: this.provisioned_capacity,
                },
              ],
            };
      
            this.options = {
              responsive: true,
              maintainAspectRatio: false,
              elements: {
                rectangle: {
                  borderWidth: 2,
                },
              },
              scales: {
                xAxes: [
                  {
                    gridLines: {
                      display: true,
                      color: chartjs.axisLineColor,
                    },
                    ticks: {
                      fontColor: chartjs.textColor,
                    },
                  },
                ],
                yAxes: [
                  {
                    gridLines: {
                      display: false,
                      color: chartjs.axisLineColor,
                    },
                    ticks: {
                      fontColor: chartjs.textColor,
                    },
                  },
                ],
              },
              legend: {
                position: 'right',
                labels: {
                  fontColor: chartjs.textColor,
                },
              },
            };
        });
    }
    ngOnDestroy(): void {
        this.themeSubscription.unsubscribe();
    }
    
}

  


  
