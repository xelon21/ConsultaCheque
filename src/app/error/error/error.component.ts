import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styles: [`
  .center{
    width: 6vw;
    background-color: grey;
    color: white;
    height: 2vw;
    
  }  
  `
  ]
})
export class ErrorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
