import { Component, OnDestroy, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NbThemeService, NbColorHelper } from '@nebular/theme';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'mychart-bar',
    templateUrl: 'mychart-bar.component.html',
    styleUrls:['mychart-bar.component.scss']
})
export class MyChartBarComponent implements OnDestroy {
    data:any;
    @Input() hub:any;
    options: any;
    themeSubscription: any;
    forecasted_traffic = [];
    provisioned_capacity = [];
    months = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];


    constructor(private theme: NbThemeService,private http: HttpClient) {
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
                  data: this.forecasted_traffic,
                  label: 'Forecasted_Traffic',
                  backgroundColor: colors.successLight,
                }, {
                  data: this.provisioned_capacity,
                  label: 'Provisioned_Capacity',
                  backgroundColor: colors.infoLight,
                }],
              };
        
              this.options = {
                maintainAspectRatio: false,
                responsive: true,
                legend: {
                  labels: {
                    fontColor: chartjs.textColor,
                  },
                },
                scales: {
                  xAxes: [
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
                  yAxes: [
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
                },
              };
        });
    }
    ngOnDestroy(): void {
        this.themeSubscription.unsubscribe();
    }
    
}

  


  
