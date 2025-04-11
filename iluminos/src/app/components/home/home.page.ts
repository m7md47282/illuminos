import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ViewChild, HostListener } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonContent,
    CommonModule,
    FooterComponent,
    MatIconModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] 
})
export class HomePage implements AfterViewInit{
  @ViewChild(IonContent, { static: true }) ionContent!: IonContent;


  
  customOptions = {
    loop: true,
    margin: 20,
    nav: true,
    dots: true,
    autoplay: false,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };


  products:any[] = [
    {
      name: 'Product 1',
      price: 100,
      image: '/assets/images/slider-1.png',
    },
    {
      name: 'Product 2',
      price: 200,
      image: '/assets/images/slider-2.png',
    },
    {
      name: 'Product 3',
      price: 300,
      image: '/assets/images/slider-3.png',
    },
    {
      name: 'Product 3',
      price: 300,
      image: '/assets/images/slider-4.png',
    },
    {
      name: 'Product 3',
      price: 300,
      image: '/assets/images/slider-5.png',
    },
    {
      name: 'Product 3',
      price: 300,
      image: '/assets/images/slider-6.png',
    },

  ];

  responsiveOptions = [
  {
    breakpoint: '1400px',
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: '1199px',
    numVisible: 3,
    numScroll: 1,
  },
  {
    breakpoint: '767px',
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: '575px',
    numVisible: 1,
    numScroll: 1,
  },
];
getSeverity(status: string) {
  switch (status) {
      case 'INSTOCK':
          return 'success';
      case 'LOWSTOCK':
          return 'warn';
      case 'OUTOFSTOCK':
          return 'danger';
      default:
          return 'info';
  }
}
  



images = [1, 2, 3,4,5,6].map((n) => `/assets/images/slider-${n}.png`);


  

  ngAfterViewInit(): void {

    this.initParallax();
  }

  async initParallax() {
    gsap.registerPlugin(ScrollTrigger);


 


    const scrollEl = await this.ionContent.getScrollElement();

    
    const mountains = document.querySelector('.mountains');

    if (!mountains || !scrollEl) return;

    ScrollTrigger.scrollerProxy(scrollEl, {
      scrollTop(value) {
        if (arguments.length) {
          scrollEl.scrollTo({
            top: value,
            behavior: 'smooth'
          });
        }
        return scrollEl.scrollTop;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: scrollEl.style.transform ? 'transform' : 'fixed',
    });

    gsap.to(mountains, {
      yPercent: -40,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        scroller: scrollEl,
      },
    });
    
    gsap.to('.letUsGuid', {
      x: -150, 
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        end: 'bottom top',
        scrub: 2,
        scroller: scrollEl,
      },
    });

    gsap.to('.experience', {
      y: -200, 
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        end: 'bottom top',
        scrub: 3,
        scroller: scrollEl,
      },
    });

    gsap.to('.sub-title, .social-links ', {
      y: 200, 
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        end: 'bottom top',
        scrub: 3,
        scroller: scrollEl,

      },
    });

    const slides = document.querySelectorAll('.slide');
    const partnerCards = document.querySelectorAll('.partner-card');
    const totalSlides = slides.length;
    const totalPartnerCards = partnerCards.length;



    gsap.from(".team-card.right-side", {
      xPercent: 1000 ,
      ease: "none",
      opacity: 1,
      scrollTrigger: {
        trigger: ".meet-us-container",
        start: "bottom bottom",
        end: "top 50%",
        // scrub: 1.5,
        scroller: scrollEl,
      }
    });
    gsap.to(".team-card.right-side", {
      xPercent: 0,
      ease: "none",
      opacity: 1,
      scrollTrigger: {
        trigger: ".meet-us-container",
        start: "bottom bottom",
        end: "top 50%",
        scrub: 2,
        scroller: scrollEl,
      }
    });
    
    gsap.from(".team-card.left-side", {
      xPercent: -1000 ,
      ease: "none",
      opacity: 1,
      scrollTrigger: {
        trigger: ".meet-us-container",
        start: "bottom bottom",
        end: "top 50%",
        // scrub: 1.5,
        scroller: scrollEl,
      }
    });
    gsap.to(".team-card.left-side", {
      xPercent: 0,
      ease: "none",
      opacity: 1,
      scrollTrigger: {
        trigger: ".meet-us-container",
        start: "bottom bottom",
        end: "top 50%",
        scrub: 2,
        scroller: scrollEl,
      }
    });
    
    
    gsap.from(".our-partners-slider-wrapper", {
      xPercent: 100 ,
      ease: "none",
      opacity: 0,
      scrollTrigger: {
        trigger: ".our-partners-container",
        start: "bottom bottom",
        end: "top 60%",
        // scrub: 1.5,
        scroller: scrollEl,
      }
    });

    gsap.to(".our-partners-slider-wrapper", {
      xPercent: 0,
      ease: "none",
      opacity: 1,
      scrollTrigger: {
        trigger: ".our-partners-container",
        start: "bottom bottom",
        end: "top 60%",
        scrub: 2,
        scroller: scrollEl,
      }
    });


    ScrollTrigger.addEventListener('refresh', () => scrollEl.scrollTo({
      top: 0,
      behavior: 'smooth'
    }));

    ScrollTrigger.refresh();
  }
}
