import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports:[
    MatIconModule,
    FormsModule
  ]
})
export class FooterComponent  implements OnInit {

  name = '';
  email = '';
  message = '';
  type = '';

  constructor() { }

  ngOnInit() {}


  onSubmit(form: any) {
    if (form.valid) {
      console.log('Form Submitted!', form.value);
    }
  }

}
