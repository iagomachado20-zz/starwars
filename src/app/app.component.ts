import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements AfterViewInit{

  @ViewChild('audio') el:ElementRef;

  constructor() {}

  ngAfterViewInit() {
    this.el.nativeElement.play();
  }

}
