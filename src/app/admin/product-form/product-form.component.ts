import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent{

  constructor() { }

  categories= [
    {id:1,name:'Database'},
    {id:2,name:"Kubernetes Cluster"},
    {id:3,name:"Compute"}
]

services= [
  {id:1,name:'Amazon Web Services'},
  {id:2,name:"Google Cloud Platform"},
  {id:3,name:"Microsoft Azure"}
]

}
