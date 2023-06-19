import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {
  
  myname="Thanesh"
  condition=false;
  myimg="../../assets/ey6.jpg";
  abc(p:any,t:any){
  }

  total=0;
  emi=0;
  roint=0;

  xyz(p:any,t:any,roi:any){
    this.total= (p* t * roi)/100;
    this.emi=this.total/t;
   }
  
   rointrest(mydata:any){
    // console.log(mydata.target.value);
    if(mydata.target.value=='car'){
      this.roint=8;
    }
    else if(mydata.target.value=='home'){
      this.roint=6;
    }
    else if(mydata.target.value=='edu'){
      this.roint=10;
    }
    else if(mydata.target.value=='personal'){
      this.roint=12;
    }
   }

}
