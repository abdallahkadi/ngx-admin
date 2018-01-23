import { Component, OnDestroy, OnInit, Input} from '@angular/core';
import { NbThemeService} from '@nebular/theme';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'mychart-horizontal-bar',
    templateUrl: 'mychart-horizontal-bar.component.html',
    styleUrls:['mychart-horizontal-bar.component.scss']
})
export class MyChartHorizontalBarComponent implements OnDestroy {
    data:any;
    @Input() site:any;
    options: any;
    themeSubscription: any;
    hubs = [];
    forecasted_traffic = [];
    provisioned_capacity = [];
    months = [{name:'January',value:"01"},{name:'February',value:"02"}, {name:'March',value:"03"},{name:'April',value:"04"}, {name:'May',value:"05"},{name:'June',value:"06"},{name:'July',value:"07"}
        ,{name:'August',value:"08"}, {name:'September',value:"09"},{name:'October',value:"10"},{name:'November',value:"11"},{name:'December',value:"12"}
    ];

    selectedMonth:string = this.months[0].value;

    constructor(private theme: NbThemeService,private http: HttpClient) {
    }
    
    ngOnInit() {
        let month = this.selectedMonth;
        this.createChart(month);

    }
    monthChaged(event){
        this.hubs = [];
        this.forecasted_traffic = [];
        this.provisioned_capacity = [];
        let month = event.target.value;
        
        this.createChart(month);
    }

    createChart(month){
        
        this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
            const colors: any = config.variables;
            const chartjs: any = config.variables.chartjs;
            let simulation = this.site.simulation;
            for(let s of simulation){
                if(s.month.split('-')[1] === month){
                    for(let h of s.hubs){
                        this.hubs.push(h.hub_name);
                        this.forecasted_traffic.push(h.forecasted_traffic);
                        this.provisioned_capacity.push(h.provisioned_capacity);
                    }
                }
            }
            this.data = {
              labels: this.hubs,
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

  


  
