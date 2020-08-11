import {Component, OnInit} from '@angular/core';
import {HomeComponent} from '../home/home.component';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  constructor() { }
  static newMax;
   static getNewMax() {
    return SliderComponent.newMax;
   }
  ngOnInit() {
  }
  getMax() {
    return HomeComponent.max;
  }
  getMin() {
    return HomeComponent.min;
  }
   value() {
     SliderComponent.newMax = (document.getElementById('myRange') as HTMLInputElement).value;
      // Update the current slider value (each time you drag the slider handle)
   }
}
