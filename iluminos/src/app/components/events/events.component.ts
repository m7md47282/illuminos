import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, OnInit, Signal, viewChild, ViewChild } from '@angular/core';
import { Swiper } from 'swiper/types';


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

  swiperRef: Signal<ElementRef<Swiper> | undefined> = viewChild('swiperRef')

  events: {
    id: number;
    name: string;
    description: string;
    image: string;
    date: string;
    countdown?: any;
  }[] = [
    {
      id: 1,
      name: 'Event 1',
      description: 'Event 1 Description',
      image: '/assets/images/slider-1.png',
      date: "2025-05-01" 
    },
    {
      id: 2,
      name: 'Event 2',
      description: 'Event 2 Description',
      image: '/assets/images/slider-2.png',
      date: "2025-06-04"
    },
    {
      id: 3,
      name: 'Event 3',
      description: 'Event 3 Description',
      image: '/assets/images/slider-3.png',
      date: "2025-05-10"
    },
    {
      id: 4,
      name: 'Event 4',
      description: 'Event 4 Description',
      image: '/assets/images/slider-4.png',
      date: "2025-07-01"
    },
    {
      id: 5,
      name: 'Event 5',
      description: 'Event 5 Description',
      image: '/assets/images/slider-5.png',
      date: "2025-07-20"
    },
    {
      id: 6,
      name: 'Event 6',
      description: 'Event 6 Description',
      image: '/assets/images/slider-6.png',
      date: "2025-05-15"
    }
  ]

  countdowns: any[] = [];

  constructor() { }

  ngOnInit() {
    this.startCountdown();
  }

  ngAfterViewInit() {
  }

  slideNext() {
    if (this.swiperRef()) {
      console.dir((this.swiperRef()?.nativeElement as any).swiper.slideNext());
    }
  }

  slidePrev() {
    if (this.swiperRef()) {
      console.dir((this.swiperRef()?.nativeElement as any).swiper.slidePrev());
    }
  }

  startCountdown() {
    setInterval(() => {
      this.events.forEach((event, index) => {
        if (event.date) {
          event.countdown = this.getTimeRemaining(new Date(event.date));
        }
      });
    }, 1000);
  }

  getTimeRemaining(endtime: Date) {
    const total = Date.parse(endtime.toString()) - Date.parse(new Date().toString());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    return {
      total, days, hours, minutes, seconds
    };
  }
}
