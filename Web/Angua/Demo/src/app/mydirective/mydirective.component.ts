import { Component } from '@angular/core';

@Component({
  selector: 'app-mydirective',
  templateUrl: './mydirective.component.html',
  styleUrls: ['./mydirective.component.css']
})
export class MydirectiveComponent {

  abc=false;
  emps=["Abi","Bharath","Sharath","Sandeep","Charana"]

  

  fruits:any=['Apple','banan','Cherry','Jackfruit','Greaps'];

  addfruit(a:any){
    this.fruits.push(a);
  } 


  superhero="Spiderman"

  myemps=[
    {"id":100,"name":"Abi"},
    {"id":200,"name":"Bindu"},
    {"id":300,"name":"chandu"},
    {"id":400,"name":"rakesh"},
    {"id":500,"name":"Rajesh"},
    
  ]
  
}
