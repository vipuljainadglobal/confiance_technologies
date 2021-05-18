import { Component, OnInit } from '@angular/core';
import {ServicesService} from '../../service/services.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public api : ServicesService ) { }

  ngOnInit(): void {

    this.apitest()
  }

  apitest(){
    this.api.get('checking').subscribe(data =>{
      console.log(data , ' -- tetsting api')
    })
  }

}
