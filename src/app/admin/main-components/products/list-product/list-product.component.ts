import { AfterViewInit, Component, OnInit,ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ProductImageUploadDialogComponent } from 'src/app/dialogs/product-image-upload-dialog/product-image-upload-dialog.component';
import { List_Product } from 'src/app/models/list-product';
import { ProductserviceService } from 'src/app/services/common/admin/productservice.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit,AfterViewInit {
 displayedColumns: string[] = ['name', 'stock', 'price',"images","edit","delete",
   ];
  userlist:List_Product[]=[{name:"user1",price:1,stock:2,id:1},{name:"user1",price:1,stock:2,id:1056},{name:"user1",price:1,stock:2,id:6},
  {name:"user3",price:1,stock:2,id:1},{name:"user4",price:1,stock:2,id:1055},{name:"user1",price:1,stock:2,id:5}]
  
  
  apiUrl:string="http://zenuykuapi.somee.com/api/Users/delete"
  type:string="userId"
   dataSource:MatTableDataSource<List_Product>;
   @ViewChild(MatPaginator) paginator: MatPaginator; 
  showFiller = false;

  constructor(private service:ProductserviceService,private dialog:MatDialog) { }
  
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
  ProductImages(id:number): void {
    const dialogRef = this.dialog.open(ProductImageUploadDialogComponent, {
      width: '1200px',
      minHeight:"300px",
      data:  id,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }

}