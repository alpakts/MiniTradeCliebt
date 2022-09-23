import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { LayoutcomponentsModule } from './layoutcomponents/layoutcomponents.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    LayoutcomponentsModule,
    MatSidenavModule,
    RouterModule
  ],exports:[LayoutComponent,LayoutcomponentsModule]
})
export class LayoutModule { }
