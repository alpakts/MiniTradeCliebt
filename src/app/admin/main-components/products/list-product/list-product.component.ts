import { Component, OnInit,ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { List_Product } from 'src/app/models/list-product';
import { ProductserviceService } from 'src/app/services/common/admin/productservice.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  userlist:List_Product[];
  
  
  displayedColumns: string[] = ['name', 'stock', 'price',
   ];
   dataSource = null;
  @ViewChild(MatPaginator) paginator: MatPaginator; 
  showFiller = false;
  constructor(private service:ProductserviceService) { }
   
  ngOnInit(): void {
  }
  getUsers(){
    this.service.GetUser<List_Product[]>("").subscribe(response=>{
      this.dataSource=new MatTableDataSource<List_Product>(response);
      this.dataSource.paginator = this.paginator;
    })
  }

}
