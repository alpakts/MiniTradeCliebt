import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable,catchError,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpErrorHandlerService implements HttpInterceptor{

  constructor(private toastr:ToastrService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(catchError(err=>{
      switch (err.status) {
        case HttpStatusCode.Unauthorized:
          this.toastr.error("Yetkiniz yeterli değil","Yetki hatası")
          break;
          case HttpStatusCode.BadRequest:
          this.toastr.error("Bilgileri doğru giriniz","Geçersiz istek")
          break;
          case HttpStatusCode.InternalServerError:
          this.toastr.error("Bilinmeyen bir hata oluştu","Bilinmeyen hata")
          break;
          case HttpStatusCode.Forbidden:
          this.toastr.error("Yetkiniz yeterli değil","Yetki hatası")
          break;
      
        default:
          this.toastr.error("Bilinmeyen bir hata oluştu","Bilinmeyen hata")
          break;
      }
      return of(err);
    }))
  }
}
