import { Component, OnInit, Input } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import {HttpClient} from '@angular/common/http';
// import { LocalDataSource } from './assets/ng2-smart-table';

import { SmartTableService } from '../../../@core/data/smart-table.service';

@Component({
  selector: 'table-chart',
  styleUrls: ['./table-chart.component.scss'],
  templateUrl: './table-chart.component.html',
})

export class TableChartComponent {
    test: any;
    name: any = 'nrfk';
    options: any = {};
    months: string[];
    all: any = [];
    dateSelection: string = '';
  //   hub = [
  //     {
  //        "name":"test1",
  //        "value":[
  //           {
  //              "tf":20,
  //              "pc":10
  //           },
  //           {
  //              "tf":20,
  //              "pc":10
  //           },
  //           {
  //              "tf":20,
  //              "pc":10
  //           },
  //           {
  //              "tf":20,
  //              "pc":10
  //           },
  //           {
  //              "tf":20,
  //              "pc":10
  //           },
  //           {
  //              "tf":20,
  //              "pc":10
  //           },
  //           {
  //              "tf":20,
  //              "pc":10
  //           },
  //           {
  //              "tf":20,
  //              "pc":10
  //           },
  //           {
  //              "tf":20,
  //              "pc":10
  //           },
  //           {
  //              "tf":20,
  //              "pc":10
  //           },
  //           {
  //              "tf":20,
  //              "pc":10
  //           },
  //           {
  //              "tf":20,
  //              "pc":10
  //           }
  //        ]
  //     }
  //  ];
    hubs: string[] = [];
    hubs2: string[] = [];
    sims: string[] = [];
    interfaces: string[] = [];
    traffic: number[] = [];
    capacity: number[] = [];
    val: number = 1;
    year: string;
    month: any;
    forecasted_traffic: any;
    provisioned_capacity: any;
    @Input() hub:any;
  
    constructor(private http: HttpClient) {
      
      }
      ngOnInit(){
        this.getCategories2();
      }
    getCategories2() {
     
      // for(let s of ){
        for(let h of this.hub['value']){
          if(this.val == 1){
            this.month = 'January';
          }
          if(this.val == 2){
            this.month = 'February';
          }
          if(this.val == 3){
            this.month = 'March';
          }
          if(this.val == 4){
            this.month = 'April';
          }
          if(this.val == 5){
            this.month = 'May';
          }
          if(this.val == 6){
            this.month = 'June';
          }
          if(this.val == 7){
            this.month = 'July';
          }
          if(this.val == 8){
            this.month = 'August';
          }
          if(this.val == 9){
            this.month = 'September';
          }
          if(this.val == 10){
            this.month = 'October';
          }
          if(this.val == 11){
            this.month = 'November';
          }
          if(this.val == 12){
            this.month = 'December';
          }
                  this.all[this.val] =
                    { 
                      hub:this.hub.name,
                      forecasted:h.ft,
                      provisioned:h.pc,
                      month: this.month
                    }
                  // this.forecasted_traffic.push(h.forecasted_traffic);
                  // this.provisioned_capacity.push(h.provisioned_capacity);
                  this.val++;
            }
            
            
      // }
     
      this.source.load(this.all);
      // this.http.get('../assets/api/data.json').subscribe(test => {
      //   this.test = test;
      //   for(let dat of this.test){
      //       this.sims = dat.simulation;
      //       // console.log(this.sims);
      //       for(let si of this.sims){
      //           this.hubs2 = si['hubs'];
      //           // console.log(this.hubs2);
      //           for(let i in this.hubs2){
                
      //             if(si['month'].split('-')[1] == '01' ||si['month'].split('-')[1] == '02' || si['month'].split('-')[1] == '03'){
      //             if(this.hubs2[i]['new_provisioning']){
      //               for(let j in this.hubs2[i]['new_provisioning']){
      //                 // this.interfaces = this.hubs2[i]['new_provisioning']
      //                 // for(let k of this.hubs2[i]['new_provisioning'][j]['interfaces']){
      //                   // console.log(this.hubs2[i]['new_provisioning'][j]);
      //                   if(this.hubs2[i]['new_provisioning'][j]['interfaces']['10g_ports']){
      //                     this.all[this.val] =
      //                     {
      //                         hub_name:this.hubs2[i]['hub_name'],
      //                         forecasted_traffic:this.hubs2[i]['forecasted_traffic'],
      //                         max_port_size:this.hubs2[i]['max_port_size'],
      //                         provisioned_capacity:this.hubs2[i]['provisioned_capacity'],
      //                         month:si['month'],
      //                         side:dat['site'],
      //                         q:'Q1',
      //                         router:this.hubs2[i]['new_provisioning'][j]['router'],
      //                         interfaces:this.hubs2[i]['new_provisioning'][j]['interfaces']['10g_ports']
      //                     }
      //                   }
      //                   if(this.hubs2[i]['new_provisioning'][j]['interfaces']['100g_ports']){
      //                     this.all[this.val] =
      //                     {
      //                         hub_name:this.hubs2[i]['hub_name'],
      //                         forecasted_traffic:this.hubs2[i]['forecasted_traffic'],
      //                         max_port_size:this.hubs2[i]['max_port_size'],
      //                         provisioned_capacity:this.hubs2[i]['provisioned_capacity'],
      //                         month:si['month'],
      //                         side:dat['site'],
      //                         q:'Q1',
      //                         router:this.hubs2[i]['new_provisioning'][j]['router'],
      //                         interfaces:this.hubs2[i]['new_provisioning'][j]['interfaces']['100g_ports']
      //                     }
      //                   }
      //                 // }
      //               }
      //               this.val++;
      //             }
      //             // else{
      //             //   // console.log(this.hubs2[i]['hub_name'],this.hubs2[i]['forecasted_traffic'],this.hubs2[i]['max_port_size'],this.hubs2[i]['provisioned_capacity'],si['month']);
      //             //   this.all[this.val] =
      //             //       {
      //             //           hub_name:this.hubs2[i]['hub_name'],
      //             //           forecasted_traffic:this.hubs2[i]['forecasted_traffic'],
      //             //           max_port_size:this.hubs2[i]['max_port_size'],
      //             //           provisioned_capacity:this.hubs2[i]['provisioned_capacity'],
      //             //           month:si['month'],
      //             //           side:dat['site'],
      //             //           q:'Q1',
      //             //       }
      //             //       this.val++;
      //             //     }
      //               }
                    
                    
                    
      //             if(si['month'].split('-')[1] == '04' ||si['month'].split('-')[1] == '05' || si['month'].split('-')[1] == '06'){
      //               if(this.hubs2[i]['new_provisioning']){
      //                 for(let j in this.hubs2[i]['new_provisioning']){
      //                   // this.interfaces = this.hubs2[i]['new_provisioning']
      //                   // for(let k of this.hubs2[i]['new_provisioning'][j]['interfaces']){
      //                     // console.log(this.hubs2[i]['new_provisioning'][j]);
      //                     if(this.hubs2[i]['new_provisioning'][j]['interfaces']['10g_ports']){
      //                       this.all[this.val] =
      //                       {
      //                           hub_name:this.hubs2[i]['hub_name'],
      //                           forecasted_traffic:this.hubs2[i]['forecasted_traffic'],
      //                           max_port_size:this.hubs2[i]['max_port_size'],
      //                           provisioned_capacity:this.hubs2[i]['provisioned_capacity'],
      //                           month:si['month'],
      //                           side:dat['site'],
      //                           q:'Q2',
      //                           router:this.hubs2[i]['new_provisioning'][j]['router'],
      //                           interfaces:this.hubs2[i]['new_provisioning'][j]['interfaces']['10g_ports']
      //                       }
      //                     }
      //                     if(this.hubs2[i]['new_provisioning'][j]['interfaces']['100g_ports']){
      //                       this.all[this.val] =
      //                       {
      //                           hub_name:this.hubs2[i]['hub_name'],
      //                           forecasted_traffic:this.hubs2[i]['forecasted_traffic'],
      //                           max_port_size:this.hubs2[i]['max_port_size'],
      //                           provisioned_capacity:this.hubs2[i]['provisioned_capacity'],
      //                           month:si['month'],
      //                           side:dat['site'],
      //                           q:'Q2',
      //                           router:this.hubs2[i]['new_provisioning'][j]['router'],
      //                           interfaces:this.hubs2[i]['new_provisioning'][j]['interfaces']['100g_ports']
      //                       }
      //                     }
      //                   // }
      //                 }
      //                 this.val++;
      //               }
      //               // else{
      //               //   // console.log(this.hubs2[i]['hub_name'],this.hubs2[i]['forecasted_traffic'],this.hubs2[i]['max_port_size'],this.hubs2[i]['provisioned_capacity'],si['month']);
      //               //   this.all[this.val] =
      //               //       {
      //               //           hub_name:this.hubs2[i]['hub_name'],
      //               //           forecasted_traffic:this.hubs2[i]['forecasted_traffic'],
      //               //           max_port_size:this.hubs2[i]['max_port_size'],
      //               //           provisioned_capacity:this.hubs2[i]['provisioned_capacity'],
      //               //           month:si['month'],
      //               //           side:dat['site'],
      //               //           q:'Q2',
      //               //       }
      //               //       this.val++;
      //               //     }
      //                 }


                      
      //             if(si['month'].split('-')[1] == '07' ||si['month'].split('-')[1] == '08' || si['month'].split('-')[1] == '09'){
      //               if(this.hubs2[i]['new_provisioning']){
      //                 for(let j in this.hubs2[i]['new_provisioning']){
      //                   // this.interfaces = this.hubs2[i]['new_provisioning']
      //                   // for(let k of this.hubs2[i]['new_provisioning'][j]['interfaces']){
      //                     // console.log(this.hubs2[i]['new_provisioning'][j]);
      //                     if(this.hubs2[i]['new_provisioning'][j]['interfaces']['10g_ports']){
      //                       this.all[this.val] =
      //                       {
      //                           hub_name:this.hubs2[i]['hub_name'],
      //                           forecasted_traffic:this.hubs2[i]['forecasted_traffic'],
      //                           max_port_size:this.hubs2[i]['max_port_size'],
      //                           provisioned_capacity:this.hubs2[i]['provisioned_capacity'],
      //                           month:si['month'],
      //                           side:dat['site'],
      //                           q:'Q3',
      //                           router:this.hubs2[i]['new_provisioning'][j]['router'],
      //                           interfaces:this.hubs2[i]['new_provisioning'][j]['interfaces']['10g_ports']
      //                       }
      //                     }
      //                     if(this.hubs2[i]['new_provisioning'][j]['interfaces']['100g_ports']){
      //                       this.all[this.val] =
      //                       {
      //                           hub_name:this.hubs2[i]['hub_name'],
      //                           forecasted_traffic:this.hubs2[i]['forecasted_traffic'],
      //                           max_port_size:this.hubs2[i]['max_port_size'],
      //                           provisioned_capacity:this.hubs2[i]['provisioned_capacity'],
      //                           month:si['month'],
      //                           side:dat['site'],
      //                           q:'Q3',
      //                           router:this.hubs2[i]['new_provisioning'][j]['router'],
      //                           interfaces:this.hubs2[i]['new_provisioning'][j]['interfaces']['100g_ports']
      //                       }
      //                     }
      //                   // }
      //                 }
      //                 this.val++;
      //               }
      //               // else{
      //               //   // console.log(this.hubs2[i]['hub_name'],this.hubs2[i]['forecasted_traffic'],this.hubs2[i]['max_port_size'],this.hubs2[i]['provisioned_capacity'],si['month']);
      //               //   this.all[this.val] =
      //               //       {
      //               //           hub_name:this.hubs2[i]['hub_name'],
      //               //           forecasted_traffic:this.hubs2[i]['forecasted_traffic'],
      //               //           max_port_size:this.hubs2[i]['max_port_size'],
      //               //           provisioned_capacity:this.hubs2[i]['provisioned_capacity'],
      //               //           month:si['month'],
      //               //           side:dat['site'],
      //               //           q:'Q3',
      //               //       }
      //               //       this.val++;
      //               //     }
      //                 }


                      
      //             if(si['month'].split('-')[1] == '10' ||si['month'].split('-')[1] == '11' || si['month'].split('-')[1] == '12'){
      //               if(this.hubs2[i]['new_provisioning']){
      //                 for(let j in this.hubs2[i]['new_provisioning']){
      //                   // this.interfaces = this.hubs2[i]['new_provisioning']
      //                   // for(let k of this.hubs2[i]['new_provisioning'][j]['interfaces']){
      //                     // console.log(this.hubs2[i]['new_provisioning'][j]);
      //                     if(this.hubs2[i]['new_provisioning'][j]['interfaces']['10g_ports']){
      //                       this.all[this.val] =
      //                       {
      //                           hub_name:this.hubs2[i]['hub_name'],
      //                           forecasted_traffic:this.hubs2[i]['forecasted_traffic'],
      //                           max_port_size:this.hubs2[i]['max_port_size'],
      //                           provisioned_capacity:this.hubs2[i]['provisioned_capacity'],
      //                           month:si['month'],
      //                           side:dat['site'],
      //                           q:'Q4',
      //                           router:this.hubs2[i]['new_provisioning'][j]['router'],
      //                           interfaces:this.hubs2[i]['new_provisioning'][j]['interfaces']['10g_ports']
      //                       }
      //                     }
      //                     if(this.hubs2[i]['new_provisioning'][j]['interfaces']['100g_ports']){
      //                       this.all[this.val] =
      //                       {
      //                           hub_name:this.hubs2[i]['hub_name'],
      //                           forecasted_traffic:this.hubs2[i]['forecasted_traffic'],
      //                           max_port_size:this.hubs2[i]['max_port_size'],
      //                           provisioned_capacity:this.hubs2[i]['provisioned_capacity'],
      //                           month:si['month'],
      //                           side:dat['site'],
      //                           q:'Q4',
      //                           router:this.hubs2[i]['new_provisioning'][j]['router'],
      //                           interfaces:this.hubs2[i]['new_provisioning'][j]['interfaces']['100g_ports']
      //                       }
      //                     }
      //                   // }
      //                 }
      //                 this.val++;
      //               }
      //               // else{
      //               //   // console.log(this.hubs2[i]['hub_name'],this.hubs2[i]['forecasted_traffic'],this.hubs2[i]['max_port_size'],this.hubs2[i]['provisioned_capacity'],si['month']);
      //               //   this.all[this.val] =
      //               //       {
      //               //           hub_name:this.hubs2[i]['hub_name'],
      //               //           forecasted_traffic:this.hubs2[i]['forecasted_traffic'],
      //               //           max_port_size:this.hubs2[i]['max_port_size'],
      //               //           provisioned_capacity:this.hubs2[i]['provisioned_capacity'],
      //               //           month:si['month'],
      //               //           side:dat['site'],
      //               //           q:'Q4',
      //               //       }
      //               //       this.val++;
      //               //     }
      //                 }
      //           }
      //   }
      //       // this.source.load(dat.simulation);
      //       // console.log(dat.simulation);
      //   }
      //   this.source.load(this.all);
      // });
    }

    
  settings = {
    setPaging:{
      perPage: 20,
    },
    pager:{
      perPage:20,
    },
    actions:false,
    // add: {
    //   addButtonContent: '<i class="nb-plus"></i>',
    //   createButtonContent: '<i class="nb-checkmark"></i>',
    //   cancelButtonContent: '<i class="nb-close"></i>',
    // },
    // edit: {
    //   editButtonContent: '<i class="nb-edit"></i>',
    //   saveButtonContent: '<i class="nb-checkmark"></i>',
    //   cancelButtonContent: '<i class="nb-close"></i>',
    // },
    // delete: {
    //   deleteButtonContent: '<i class="nb-trash"></i>',
    //   confirmDelete: true,
    // },
    columns: {
      "month": {
        title: 'Month',
        type: 'string',
        filter:false,
      },
      "forecasted": {
        title: 'Forecasted Traffic',
        type: 'string',
        filter:false,
      },
      'provisioned': {
        title: 'Provisioned Capacity',
        type: 'string',
        filter:false,
      },
      // 'max_port_size': {
      //   title: 'Ports to Provision',
      //   type: 'string'
      // },
      // 'router': {
      //   title: 'Router',
      //   type: 'string'
      // },
      // 'interfaces': {
      //   title: 'Recommended Port(s)',
      //   type: 'string'
      // },
      // 'provisioned_capacity': {
      //   title: 'Market Provisioned Capacity (Gbps)',
      //   type: 'string'
      // },
      // 'forecasted_traffic': {
      //   title: 'Forecasted Traffic (Gbps)',
      //   type: 'string'
      // },
      // 'q': {
      //   title: 'Quarter',
      //   type: 'string'
      // },
    //   age: {
    //     title: 'Age',
    //     type: 'number',
    //   },
    },
  };

  source: LocalDataSource = new LocalDataSource();
  
  
//    ngOnInit() {
//     console.log(this.test);
//   }


selectMonth(month){
    this.hubs = [];
    this.traffic = [];
    this.capacity = [];

    let simulation = this.test.simulation.filter(sim => {
      return sim.month === month;
    });

    for(let sim of simulation){
      for(let hub of sim.hubs){
        this.hubs.push(hub.hub_name);
        this.traffic.push(hub.forecasted_traffic);
        this.capacity.push(hub.provisioned_capacity);
      }
    }
  };

  start(data) {
    if(this.test.simulation.length > 0){
      for(let sim of this.test.simulation){
        this.months.push(sim.month);
      }
      this.year += (new Date(this.months[0]).getFullYear() + 1).toString();
      this.dateSelection = this.months[0];
      this.selectMonth(this.dateSelection);
    }
  }

  ngAfterViewInit() {
    //document.getElementsByClassName('provisioned_capacity')['0'].style.width = '10px'
    // document.getElementsByClassName('forecasted_traffic')['0'].style.width = '10px'
    // document.getElementsByClassName('max_port_size')['0'].style.width = '10px'
    // document.getElementsByClassName('q')['0'].style.width = '6px'
    
    }
  // constructor(private service: SmartTableService) {
    //   const data = this.service.getData();
    //   this.source.load(data);
    // }
  
}