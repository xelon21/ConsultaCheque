import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`

  .whiteText {
    color: white;
  }

.spacer {
    flex: 1 1 auto;
}
.espicono{
  margin-left: 0.5vw;
}
.colorDiv {
  background: #ffffff9f;
}

.diametro{
  width: 6vw;
  color: white;
}

.mat-toolbar {
  background: #303F9F;
  width: 100%;
  
}

`
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {

  }
}
