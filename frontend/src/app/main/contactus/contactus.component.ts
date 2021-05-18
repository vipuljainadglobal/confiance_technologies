import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../service/services.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {

  constructor( public api : ServicesService ) { }

  ngOnInit() { }

  submit(){
    console.log('data')
  }
}
