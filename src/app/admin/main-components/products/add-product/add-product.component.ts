import { Component, OnInit } from '@angular/core';
import { Create_Product } from 'src/app/models/create-product';
import { ProductserviceService } from 'src/app/services/common/admin/productservice.service';
import {ToastrService} from "ngx-toastr"
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private service:ProductserviceService,private toastr:ToastrService) { }
  opened:boolean;
  ProductToAdd:Create_Product=new Create_Product();
  ngOnInit(): void {
  }
  open(){
    this.opened=false
  }
  Create(name:HTMLInputElement,stock:HTMLInputElement,price:HTMLInputElement){
    console.log(name.value)
    this.ProductToAdd.name=name.value.toString();
    this.ProductToAdd.price=parseInt(price.value) ;
    this.ProductToAdd.stock=parseInt(stock.value)
    this.service.CreateUser<Create_Product>("",this.ProductToAdd).subscribe(response=>{
      this.toastr.success("Başarılı","ürün eklendi")
    },(error:HttpErrorResponse)=>{
      this.toastr.error(error.error,)
    })
  }

}
