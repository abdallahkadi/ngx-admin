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

  


  
