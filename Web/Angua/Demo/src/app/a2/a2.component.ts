import { Component } from '@angular/core';
import { CommservService } from '../commserv.service';

@Component({
  selector: 'app-a2',
  templateUrl: './a2.component.html',
  styleUrls: ['./a2.component.css']
})
export class A2Component {
  constructor(private db :CommservService){}
  abc(){
   // console.log("Hi A2 component db logic : 100 lines ")
   this.db.dblogic();
  }

}
