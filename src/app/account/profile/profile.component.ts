import { Component, OnInit } from '@angular/core';
import { faUser} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLock} from '@fortawesome/free-solid-svg-icons';
import { faClock} from '@fortawesome/free-solid-svg-icons';
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from '../../../nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { ChangepasswordComponent } from '../changepassword/changepassword.component';


@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FontAwesomeModule, FormsModule,NavBarComponent,RouterModule ,ChangepasswordComponent],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})


export class ProfileComponent{
  faUser=faUser;
  faLock=faLock;
  faClock=faClock;

  user = {
    name:'',
    firstname: '',
    lastname: '',
    birthday:'',
    email: '',
    phonenumber:'',
    address:''
  };

  onSubmit(form: any) {
    console.log('Form submitted:', form.value);
  }
}