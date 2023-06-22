import { Component } from '@angular/core';
import { CommservService } from '../commserv.service';

@Component({
  selector: 'app-a3',
  templateUrl: './a3.component.html',
  styleUrls: ['./a3.component.css']
})
export class A3Component {

  constructor(private db:CommservService){}
  abc(){
    //console.log("Hi A3 componet db logic : 100 lines  ")
    this.db.dblogic();
  }
}
