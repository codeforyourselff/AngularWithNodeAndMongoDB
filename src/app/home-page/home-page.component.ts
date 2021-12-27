import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private service: AppServiceService) { }

  ngOnInit(): void {
  }

}
