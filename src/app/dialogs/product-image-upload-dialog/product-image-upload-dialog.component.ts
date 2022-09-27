import { Component, Inject, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FileUploadOptions } from 'src/app/services/common/file-upload/file-upload.component';
import { Basedialog } from '../base/basedialog';

@Component({
  selector: 'app-product-image-upload-dialog',
  templateUrl: './product-image-upload-dialog.component.html',
  styleUrls: ['./product-image-upload-dialog.component.css']
})
export class ProductImageUploadDialogComponent extends Basedialog<ProductImageUploadDialogComponent>  {
  images:number[]=[1,2,5,6,4,8,5,5,5,5,5,5]
  @Output() options:Partial<FileUploadOptions>={apiUrl:"https://localhost:7052/api/Products/Upload",explenation:"Resimleri sürükleyiniz Ya da Seçiniz  ",fileTypes:".png,.jpg,.jpeg"}
  constructor( dialog:MatDialogRef<ProductImageUploadDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: uploadstates|number) {
    super(dialog)
   }



}
export enum uploadstates{
  close
}
