import { Component, inject } from '@angular/core';
import { IonRouterOutlet } from '@ionic/angular/standalone';
import { HeaderComponent } from './components/header/header.component';
import { IonContent } from '@ionic/angular/standalone';
import { IonApp } from '@ionic/angular/standalone';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [
    HeaderComponent,
    IonRouterOutlet,
    IonContent,
    IonApp,
  ],
})
export class AppComponent {
  private iconRegistry = inject(MatIconRegistry);
  private sanitizer = inject(DomSanitizer);


  ngOnInit(){
    this.registerIcons();
  }

  registerIcons(){
    this.iconRegistry.addSvgIcon(
       'google-colored',
        this.sanitizer.bypassSecurityTrustResourceUrl('assets/icon/google-colored.svg')
    )
    this.iconRegistry.addSvgIcon(
       'star-filled',
        this.sanitizer.bypassSecurityTrustResourceUrl('assets/icon/star-filled.svg')
    )
    this.iconRegistry.addSvgIcon(
       'star',
        this.sanitizer.bypassSecurityTrustResourceUrl('assets/icon/star.svg')
    )
    this.iconRegistry.addSvgIcon(
       'x',
        this.sanitizer.bypassSecurityTrustResourceUrl('assets/icon/x.svg')
    )
    this.iconRegistry.addSvgIcon(
       'tiktok',
        this.sanitizer.bypassSecurityTrustResourceUrl('assets/icon/tiktok.svg')
    )
    this.iconRegistry.addSvgIcon(
       'instagram',
        this.sanitizer.bypassSecurityTrustResourceUrl('assets/icon/instagram.svg')
    )
    this.iconRegistry.addSvgIcon(
       'snapchat',
        this.sanitizer.bypassSecurityTrustResourceUrl('assets/icon/snapchat.svg')
    )
    this.iconRegistry.addSvgIcon(
       'whatsapp',
        this.sanitizer.bypassSecurityTrustResourceUrl('assets/icon/whatsapp.svg')
    )
  }
}
