import { HttpClient } from '@angular/common/http';
import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  Renderer2,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import {
  DeleteDialogComponent,
  deleteState,
} from 'src/app/dialogs/delete-dialog/delete-dialog.component';
declare var $;
@Directive({
  selector: '[appDelete]',
})
export class DeleteDirective {
  constructor(
    public dialog: MatDialog,
    private element: ElementRef,
    private renderer: Renderer2,
    private httpClient:HttpClient,
    private toastr:ToastrService,
    private spinnner: NgxSpinnerService
  ) {
    const img: HTMLImageElement = renderer.createElement('img');
    img.setAttribute('src', '/assets/delete.png');
    img.setAttribute('style', 'cursor:pointer;');
    renderer.appendChild(element.nativeElement, img);
  }
  @Input() id: number;
  @Input() type:string;
  @Input() apiUrl:string;
  @Output() callback: EventEmitter<any> = new EventEmitter();
  @HostListener('click')
  onClick() {
    console.log(this.type,this.apiUrl,this.callback)
    this.openDialog(() => {
      this.spinnner.show("a2")
      this.httpClient.post(`${this.apiUrl}?${this.type}=${this.id}`,null).subscribe(()=>{
        this.toastr.success("başarılı")
        this.callback.emit();
        setTimeout(() => {
          this.spinnner.hide("a2").then(
            $(td.parentElement).fadeOut(1000)
          )
        }, 1000);
      },()=>{
        this.toastr.error("başarısız","Bilinmeyen bir hata gerçekleşti")
        this.spinnner.hide("a2")
      })
        
      console.log(this.id);
      const td: HTMLTableCellElement = this.element.nativeElement;
      
       
        
        
   
    });
  }

  openDialog(afterClosed: any): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '250px',
      data: deleteState.yes,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      if (result == deleteState.yes) {
        afterClosed();
        
          
        
      }
    });
  }
}
