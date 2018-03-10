import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../store/auth/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) {
  }

  submit(form) {
    this.authService.login(form.value).subscribe(res => console.log(res));
  }

  ngOnInit() {
  }

}
