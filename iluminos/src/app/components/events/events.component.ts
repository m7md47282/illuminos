import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
  imports: [
    CommonModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EventsComponent  implements OnInit {
  images = [1, 2, 3,4,5,6].map((n) => `/assets/images/slider-${n}.png`);

  constructor() { }

  ngOnInit() {}

}
