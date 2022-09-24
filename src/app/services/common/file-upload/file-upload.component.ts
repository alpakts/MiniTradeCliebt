import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {
  @Input() options:Partial<FileUploadOptions>;
  constructor(private http:HttpClient,private toastr:ToastrService){}
  public files: NgxFileDropEntry[];

  public dropped(files: NgxFileDropEntry[]) {
    this.files = files;
    
    for(const file of files){
      
      const fileEntry = file.fileEntry as FileSystemFileEntry;
      fileEntry.file((_file:File)=>{
        const formData=new FormData();
        formData.append(_file.name,_file,file.relativePath);
        console.log(file.relativePath)
        this.http.post(this.options.apiUrl,formData,{responseType: 'blob'}).subscribe(response=>{
          this.toastr.success("Dosyalar Yüklendi","Başarılı")
        },(error:HttpErrorResponse)=>{
          this.toastr.error(error.message)
        })
        
      })
      
    }
    
    
  }
  

  public fileOver(event){
    console.log(event);
  }

  public fileLeave(event){
    console.log(event);
  }
}
export class FileUploadOptions{
  apiUrl:string;
  explenation?:string="dosya seçiniz";
  fileTypes?:string;
  }
