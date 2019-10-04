import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { Store } from '@ngrx/store';
import { CLEAR_USERS } from '../stores/actions/app-action';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  users = [];
  lastUpdated: Date;
  constructor(private user: UserService, private store: Store<any>) { }

  ngOnInit() {
    this.user.getAllState().subscribe((data) => {
      this.lastUpdated = data.lastUpdate;
      this.users = data.users;
    });
  }

  clearUsers() {
    this.store.dispatch({ type: CLEAR_USERS });
  }

}
