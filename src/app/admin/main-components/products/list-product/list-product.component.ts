import { AfterViewInit, Component, OnInit,ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { List_Product } from 'src/app/models/list-product';
import { ProductserviceService } from 'src/app/services/common/admin/productservice.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit,AfterViewInit {
 displayedColumns: string[] = ['name', 'stock', 'price',"edit","delete"
   ];
  userlist:List_Product[]=[{name:"user1",price:1,stock:2,id:1},{name:"user1",price:1,stock:2,id:1056},{name:"user1",price:1,stock:2,id:6},
  {name:"user3",price:1,stock:2,id:1},{name:"user4",price:1,stock:2,id:1055},{name:"user1",price:1,stock:2,id:5}]
  
  
  apiUrl:string="http://zenuykuapi.somee.com/api/Users/delete"
  type:string="userId"
   dataSource:MatTableDataSource<List_Product>;
   @ViewChild(MatPaginator) paginator: MatPaginator; 
  showFiller = false;
  constructor(private service:ProductserviceService) { }
  
  ngOnInit(): void {
    
    this.dataSource= new MatTableDataSource<List_Product>(this.userlist);
    
    
  }
  ngAfterViewInit() :void{
    this.dataSource.paginator = this.paginator; 
  }
  getUsers(){
    this.service.GetUser<List_Product[]>("").subscribe(response=>{
      this.dataSource=new MatTableDataSource<List_Product>(response);
      this.dataSource.paginator = this.paginator;
      console.log("asdasds")
    },error=>{
      console.log("sfdsfds")
      this.dataSource=new MatTableDataSource<List_Product>(this.userlist);
    })
  }

}