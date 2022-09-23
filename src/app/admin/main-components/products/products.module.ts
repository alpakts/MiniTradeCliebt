import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { RouterModule } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import { ListProductComponent } from './list-product/list-product.component';


@NgModule({
  declarations: [
    ProductsComponent,
    AddProductComponent,
    ListProductComponent,

  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSidenavModule,
    MatPaginatorModule,
    MatSelectModule,
    MatTableModule,
    MatDialogModule,
    RouterModule.forChild([{path:"",component:ProductsComponent,children:[{
      path:"list",component:ListProductComponent
    }]}])
  ],exports:[ProductsComponent,AddProductComponent]
})
export class ProductsModule { }
