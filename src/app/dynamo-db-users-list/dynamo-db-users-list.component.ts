import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-dynamo-db-users-list',
  templateUrl: './dynamo-db-users-list.component.html',
  styleUrls: ['./dynamo-db-users-list.component.css']
})
export class DynamoDbUsersListComponent implements OnInit {

  users = [];
  constructor(private user: UserService) { }

  ngOnInit() {
   this.user.getUser().then(response => {
    this.users = response.data;
}).catch(error => {
    console.log(error.response);
});
  }
}
