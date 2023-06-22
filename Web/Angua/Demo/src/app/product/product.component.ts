import { Component, OnInit } from '@angular/core';
import { ProdservService } from '../prodserv.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent  implements OnInit{

  constructor(private serv:ProdservService){

  }
  myproducts:any=[]
  ngOnInit() {
   
    return this.serv.getAlltheproducts().subscribe(data=>{
      this.myproducts=data;
    },error=>{
      console.log("Something went wrong ,,,,!")
    })
  }

}
