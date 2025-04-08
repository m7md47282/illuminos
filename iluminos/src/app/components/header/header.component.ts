import { Component, inject, OnInit } from '@angular/core';
import { IonContent, IonTitle, IonButtons, IonHeader, IonMenu, IonMenuButton, IonToolbar, IonButton, IonMenuToggle } from '@ionic/angular/standalone';
import { DisplayService } from 'src/app/services/display.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [ IonContent, IonButtons, IonHeader, IonMenu, IonTitle, IonToolbar, IonMenuButton],
})
export class HeaderComponent  implements OnInit {
  displayService = inject(DisplayService);
  
  isMobile = true;

  ngOnInit() {
    this.displayService.isMobile().subscribe((result: any) => {
      this.isMobile = result.matches;
    });
  }

}
