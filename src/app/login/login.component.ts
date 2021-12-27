import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  //ngModel variables
  us: string = '';
  ps: string = '';

  constructor(private service: AppServiceService) {}

  ngOnInit(): void {}
  authLogin() {
    const credentials = {
      userName: this.us,
      passWord: this.ps,
    };
    this.service.loginUser(credentials).subscribe((response) => {
      console.log(response);
    });
  }
}
