import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import url from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AppServiceService implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  registerUser(obj: Object) {
    return this.http.post(`${url.apiUrl}/registeruser`, obj);
  }

  getData(user: string) {
    return this.http.get(`${url.apiUrl}/registeruser/${user}`);
  }

  getAllData() {
    return this.http.get(`${url.apiUrl}`);
  }

  updateUserById(obj: Object) {
    return this.http.patch(`${url.apiUrl}/updateUser`, obj);
  }

  deleteUserById(user: string) {
    const id = user;
    return this.http.delete(`${url.apiUrl}/deleteUser/${id}`);
  }

  loginUser(obj: Object) {
    return this.http.post(`${url.apiUrl}/getLoginUser`, obj);
  }

  welcomePage() {
    return this.http.get(`${url.apiUrl}/home`);
  }
}
