import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-snipper',
  templateUrl: './snipper.component.html',
  styles: [
  ]
})
export class SnipperComponent implements OnInit {

  constructor() { }

  spiner: boolean = false;

  ngOnInit(): void {

    this.spiner = true;
   
    // setTimeout(() => {
    //   this.spiner = true;      
    // }, 1)

  }

  

}
