import { Component } from '@angular/core';
import { CommservService } from '../commserv.service';

@Component({
  selector: 'app-a1',
  templateUrl: './a1.component.html',
  styleUrls: ['./a1.component.css']
})
export class A1Component {

  constructor(private db:CommservService){}
  abc(){
    this.db.dblogic();
   // console.log("Hi A1 componet with db logic : 100 lines ")
  }
}
