import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
declare var $;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private spinner:NgxSpinnerService) {

  }
  ngOnInit(): void {
    this.spinner.show("a2")
    setTimeout(() => {
      this.spinner.hide("a2")
    }, 500);
  }
  title = 'shopclient';

}
//$(document).ready(()=>{
//  alert("sad")
//})
