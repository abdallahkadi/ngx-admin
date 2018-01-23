import { Component, OnDestroy, OnInit, Input} from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'mychart-xaxis',
    templateUrl: 'mychart-xaxis.component.html',
    styleUrls:['mychart-xaxis.component.scss']
})
export class MyChartXaxisComponent implements OnDestroy {
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
                data: this.forecasted_traffic,
                borderColor: colors.primary,
                backgroundColor: colors.primary,
                fill: false,
                borderDash: [5, 5],
                pointRadius: 8,
                pointHoverRadius: 10,
                }, {
                label: 'Provisioned_Capacity',
                data: this.provisioned_capacity,
                borderColor: colors.dangerLight,
                backgroundColor: colors.dangerLight,
                fill: false,
                borderDash: [5, 5],
                pointRadius: 8,
                pointHoverRadius: 10,
                }]
            };
    
            this.options = {
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                    position: 'bottom',
                    labels: {
                        fontColor: chartjs.textColor,
                    },
                },
                hover: {
                    mode: 'index',
                },
                scales: {
                    xAxes: [
                        {
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Month',
                        },
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
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Value',
                        },
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

  


  
