import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  ngOnInit(){
    AOS.init();
   }
   onActivate(event) {
     window.scroll(0,0);
  }
 }