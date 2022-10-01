import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from './admin/admin.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { MatFormFieldModule } from '@angular/material/form-field';
import { DialogModule } from '@angular/cdk/dialog';
import { HttpErrorHandlerService } from './services/common/http-error-handler.service';


@NgModule({
  declarations: [
    AppComponent,
  
    
    
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    MatFormFieldModule,
    UiModule,

    ToastrModule.forRoot({
      positionClass:"toast-top-right"
    }),
    NgxSpinnerModule,
    
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:HttpErrorHandlerService,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
