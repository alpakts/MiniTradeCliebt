import { Component, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }
  opened:boolean=true
  ngOnInit(): void {
  }
  open(){
    
    if (this.opened==false) {
      this.opened=true
    }else
    this.opened=false
    
  

  }
}
