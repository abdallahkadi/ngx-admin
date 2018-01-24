import {
  Component
} from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import {
  forEach
} from '@angular/router/src/utils/collection';


@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {

  data: any;
  names: any;
  siteName = "";
  hubs: any;

  constructor(private http: HttpClient) {
    this.data = this.getData();
  }

  siteChanged(name) {
    let temp = []
    this.hubs = [];
    for (let d of this.data) {
      if (d.site == name) {
        for (let s of d.simulation) {
          for (let h of s.hubs) {
            if (this.hubs.length > 0) {
              let flag = false;
              let i = '';
              for (const {
                  item,
                  index
                } of this.hubs.map((item, index) => ({
                  item,
                  index
                }))) {
                if (item.name == h.hub_name) {
                  i = index;
                  flag = true;
                  break;
                } else {
                  flag = false;
                }
              }
              if (flag) {
                this.hubs[i].value.push({
                  ft: h.forecasted_traffic,
                  pc: h.provisioned_capacity
                })
              } else {
                this.hubs.push({
                  name: h.hub_name,
                  value: [{
                    ft: h.forecasted_traffic,
                    pc: h.provisioned_capacity
                  }]
                });
              }
            }else{
                this.hubs.push({
                  name: h.hub_name,
                  value: [{
                    ft: h.forecasted_traffic,
                    pc: h.provisioned_capacity
                  }]
                });
              
            }
          }
        }
      }
    }
  }

  getData() {
    let self = this;
    this.http.get('./assets/api/data.json').subscribe(data => {
      self.data = data;
      let temp = [];
      for (let d of self.data) {
        temp.push(d.site);
      }
      self.names = temp;
    });


  }


}

