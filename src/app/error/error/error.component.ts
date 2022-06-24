import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styles: [`
  .center{
    margin-top: 20vw;  
    width: 20vw;    
    height: 5vw;    
  } 
  .botoncito{
    background-color: grey;
    color: white;
    width: 10vw;
  }
  
  .fondo {
    background-color: #F5F5F5;
    height: 50vw;
  }
  
  .E404{
    margin-top: 5vw; 
    
  }
  `
  ]
})
export class ErrorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
