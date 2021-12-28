import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  userData: Object={};
  constructor(private service: AppServiceService) { }

  ngOnInit(): void {
  }
  getWelcomePage() {
    this.service.welcomePage().subscribe((response)=>{
      this.userData = response;
    });
  }
}
