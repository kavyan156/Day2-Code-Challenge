import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onLoginClick() {
    const URL = 'https://login-web-app.auth.us-east-1.amazoncognito.com/login?response_type=code&client_id=6i8ldkvphmd0b3vtr911l0efdn&redirect_uri=http://localhost:4200';
    window.location.assign(URL);
  }


}
