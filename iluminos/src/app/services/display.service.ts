import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {

  constructor(private breakpointObserver: BreakpointObserver) {}

  isMobile() {
    return   this.breakpointObserver.observe([Breakpoints.Handset])
  }
     
}
