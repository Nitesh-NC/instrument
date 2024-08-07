import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLock, faUser} from '@fortawesome/free-solid-svg-icons';
import { faClock} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-changepassword',
  standalone: true,
  imports: [RouterModule,FormsModule, FontAwesomeModule],
  templateUrl: './changepassword.component.html',
  styleUrl: './changepassword.component.css'
})
export class ChangepasswordComponent {
  faLock = faLock
  faClock = faClock
  faUser = faUser
  
  user = {
    currentpassword:'',
    newpassword: '',
    confirmpassword: ''
  
  };

  onSubmit(form: any) {
    console.log('Form submitted:', form.value);}

}
