import { CommonModule } from '@angular/common';
import { Component, computed, CUSTOM_ELEMENTS_SCHEMA, ElementRef, OnInit, signal, Signal, viewChild, ViewChild, viewChildren } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
  imports: [
    CommonModule,
    MatIconModule,
    FooterComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EventsComponent implements OnInit {

  images = [1, 2, 3,4,5,6].map((n) => `/assets/images/slider-${n}.png`);

  sliderContainer: Signal<ElementRef<any> | undefined> = viewChild('sliderContainer')
  slides = viewChildren<ElementRef<HTMLElement>>('slide');


  activeSlide = computed(() => {
    this.slides()[this.slides().length - 1].nativeElement.classList.add('active');
    return this.slides()[this.slides().length - 1];
  });

  nextSlide = computed(() => {
    this.slides()[this.slides().length - 2].nativeElement.classList.add('next');
    return this.slides()[this.slides().length - 2];
  });
  thirdSlide = computed(() => {
    this.slides()[this.slides().length - 3].nativeElement.classList.add('third');
    return this.slides()[this.slides().length - 3];
  });

  firstSlide = computed(() => {
    this.slides()[0].nativeElement.classList.add('first');
    return this.slides()[0];
  });

  selectedSlide = computed(() => {
    return this.commingEvents()[this.commingEvents().length - 1];
  });

  player: any;

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
        description: 'cool place you wanna fo some actives in and you would absolutely  love too much that you wanna tell your friends about and post about',
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

  commingEvents = signal([...this.events]);

  slideNext() {
    this.activeSlide().nativeElement.classList.add('slide-up');


    setTimeout(() => {
      this.commingEvents.update(events => [events[events.length - 1], ...events.slice(0, -1)]);


      this.nextSlide().nativeElement.classList.add('active');
      this.nextSlide().nativeElement.classList.remove('next');

      this.activeSlide().nativeElement.classList.remove('slide-up');
      this.activeSlide().nativeElement.classList.remove('active');

      this.activeSlide().nativeElement.classList.add('first');
      this.firstSlide().nativeElement.classList.remove('first');


      this.thirdSlide().nativeElement.classList.add('next');
      this.thirdSlide().nativeElement.classList.remove('third');
    }, 300);

    // this.player.clearInterval();

  }

  slidePrev() {

    this.activeSlide().nativeElement.classList.remove('active');
    this.activeSlide().nativeElement.classList.add('next');

    this.thirdSlide().nativeElement.classList.remove('third');

    this.nextSlide().nativeElement.classList.add('third');
    this.nextSlide().nativeElement.classList.remove('next');

    this.firstSlide().nativeElement.classList.add('active');
    this.firstSlide().nativeElement.classList.add('slide-down');

    this.commingEvents.update(events => [...events.slice(1), events[0]]);

    setTimeout(() => {
      this.firstSlide().nativeElement.classList.remove('first');

      this.activeSlide().nativeElement.classList.remove('slide-down');
    }, 300);

    // this.player.clearInterval();
  }




  countdowns: any[] = [];

  constructor() { }

  ngOnInit() {
    this.startCountdown();
  }

  ngAfterViewInit() {
    this.setTheSider()


    this.player = setInterval(() => {
      this.slideNext()
    }, 3000);
  }

  setTheSider() {

    this.slides()[this.slides().length - 1].nativeElement.classList.add('active');
    this.slides()[this.slides().length - 2].nativeElement.classList.add('next');
    this.slides()[0].nativeElement.classList.add('first');


    this.sliderContainer()?.nativeElement.classList.add('moha-slider-container');
    this.slides().forEach((slide) => {
      slide.nativeElement.classList.add('moha-slide');
    });

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
