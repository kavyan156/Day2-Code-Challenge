import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';


@Component({
  selector: 'app-dynamo-db-users',
  templateUrl: './dynamo-db-users.component.html',
  styleUrls: ['./dynamo-db-users.component.css']
})
export class DynamoDbUsersComponent implements OnInit {


  constructor(public user: UserService) { }

  ngOnInit() {
  }

}
