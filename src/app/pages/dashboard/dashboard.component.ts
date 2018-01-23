import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {

  data: any;
  
  

  constructor(private http: HttpClient) {
    this.data = this.getData();
  }

  getData() {
    let self = this;
    this.http.get('./assets/api/data.json').subscribe(data => {
      self.data = data;
    });
  }

 
}
