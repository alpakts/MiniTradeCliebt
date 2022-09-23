import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { RouterModule } from '@angular/router';
import { UiComponent } from './ui/ui.component';



@NgModule({
  declarations: [
    UiComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule,
  ],exports:[ComponentsModule]
})
export class UiModule { }
