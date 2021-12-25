import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  //ngModel variables
  user: string = '';
  fs: string = '';
  ls: string = '';
  em: string = '';
  gender: string = '';
  cn: string = "";

  constructor(private service: AppServiceService,private route:Router) {}

  ngOnInit(): void {}

  registerUser() {
    const obj = {
      userName: this.user,
      firstName: this.fs,
      lastName: this.ls,
      email: this.em,
      gender: this.gender,
      contactNo: this.cn,
    };
    this.service.registerUser(obj).subscribe((response)=>{
      console.log(response);
    });
  }

  getSpecificUser() {
    this.service.getData(this.user).subscribe((response)=>{
      console.log(response);
    });
  }

  getAllUser() {
    this.service.getAllData().subscribe((response)=>{
      console.log(response);
    });
  }

  updateUser() {
    const obj = {
      userName:this.user,
      firstName:this.fs,
      lastName:this.ls,
      email:this.em
    };
    this.service.updateUserById(obj).subscribe((response)=>{
      console.log(response);
    });
  }

  deleteUser() {
    this.service.deleteUserById(this.user).subscribe((response)=>{
      console.log(response);
    });
  }
}
