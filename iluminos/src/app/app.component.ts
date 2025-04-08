import { Component } from '@angular/core';
import { IonRouterOutlet } from '@ionic/angular/standalone';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { IonContent } from '@ionic/angular/standalone';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [
    HeaderComponent,
    FooterComponent,
    IonRouterOutlet,
    IonContent,
  ],
})
export class AppComponent {
  constructor() {}
}
