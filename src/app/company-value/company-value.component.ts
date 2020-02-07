import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-value',
  templateUrl: './company-value.component.html',
  styleUrls: ['./company-value.component.scss']
})
export class CompanyValueComponent implements OnInit {


  myStyle: object = {};
  myParams: object = {};
  width: number = 100;
  height: number = 100;

  ngOnInit() {
      this.myStyle = {
          'position': 'fixed',
          'width': '100%',
          'height': '100%',
          'z-index': -1,
          'top': 0,
          'left': 0,
          'right': 0,
          'bottom': 0,
      };

  this.myParams = {
          particles: {
              number: {
                  value: 100,
              },
              color: {
                  value: '#ff0000'
              },
              shape: {
                  type: 'triangle',
              },
      }
  };
  }

}
