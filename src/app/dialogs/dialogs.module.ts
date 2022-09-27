import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { FileUploadDialogComponent } from './file-upload-dialog/file-upload-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FileUploadModule } from '../services/common/file-upload/file-upload.module';
import { ProductImageUploadDialogComponent } from './product-image-upload-dialog/product-image-upload-dialog.component';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    DeleteDialogComponent,
    FileUploadDialogComponent,
    ProductImageUploadDialogComponent
  ],
  imports: [
    CommonModule,  
    MatDialogModule,
    MatButtonModule,
    FileUploadModule,
    MatCardModule
  ],exports:[
    DeleteDialogComponent,FileUploadDialogComponent
  ]
})
export class DialogsModule { }
