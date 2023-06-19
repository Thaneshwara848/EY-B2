import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-directiv',
  templateUrl: './directiv.component.html',
  styleUrls: ['./directiv.component.css']
})
export class DirectivComponent {

  constructor( private router:Router) {}

  
  abc(uname:string,upass:string){
    console.log("hiiiiiiiiii")

    if(uname=="Thanesh" && upass=="Thanesh@123"){
       this.router.navigate(['/home'])
    }
    else{
      alert("invali password ")
    }
  }
}
