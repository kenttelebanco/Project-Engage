import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.scss']
})
export class ServiceCardComponent implements OnInit {

  constructor(private router:Router) { }

  navigate(){
    this.router.navigate(['']);
  }

  ngOnInit() {
  }

}
