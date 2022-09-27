import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import { ToastrService } from 'ngx-toastr';
import { deleteState } from 'src/app/dialogs/delete-dialog/delete-dialog.component';
import { FileUploadDialogComponent } from 'src/app/dialogs/file-upload-dialog/file-upload-dialog.component';
@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {
  @Input() options:Partial<FileUploadOptions>;
  constructor(private http:HttpClient,private toastr:ToastrService,private dialog:MatDialog){}
  public files: NgxFileDropEntry[];
  
  public dropped(files: NgxFileDropEntry[]) {
    this.files = files;
    const formData:FormData=new FormData();
    for(const file of files){
      
      const fileEntry = file.fileEntry as FileSystemFileEntry;
      fileEntry.file((_file:File)=>{
        formData.append(_file.name,_file,file.relativePath);
        console.log(file.relativePath)
       
        
      })
      
    }
    this.openDialog(()=>{
      this.http.post(this.options.apiUrl,formData,{headers:new HttpHeaders().set("responseType","blob")}).subscribe(response=>{
        this.toastr.success("Dosyalar Yüklendi","Başarılı")
      },(error:HttpErrorResponse)=>{
        this.toastr.error(error.message)
        
      })
    })
    
    
    
  }
  

  public fileOver(event){
    console.log(event);
  }

  public fileLeave(event){
    console.log(event);
  }
  openDialog(afterClosed: any): void {
    const dialogRef = this.dialog.open(FileUploadDialogComponent, {
      width: '250px',
      data: deleteState.yes,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      if (result == deleteState.yes) {
        afterClosed();
        
          
        
      }else{
        this.files=null;
      }
    });
  }
}
export class FileUploadOptions{
  apiUrl:string;
  explenation?:string="dosya seçiniz";
  fileTypes?:string;
  }
