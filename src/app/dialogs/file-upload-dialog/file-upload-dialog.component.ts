import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Basedialog } from '../base/basedialog';


@Component({
  selector: 'app-file-upload-dialog',
  templateUrl: './file-upload-dialog.component.html',
  styleUrls: ['./file-upload-dialog.component.css']
})
export class FileUploadDialogComponent extends Basedialog<FileUploadDialogComponent> implements OnInit {

  constructor(dialogref:MatDialogRef<FileUploadDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: FileUploadStates) {
    super(dialogref)
   }
   

  ngOnInit(): void {
  }

}
export enum FileUploadStates{
  yes,
  no
}
