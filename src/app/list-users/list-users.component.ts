import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User, Query } from '../shared/models/user.model';
import { USER_DETAILS_QUERY} from '../shared/graphql-queries/queries';
import { Apollo, QueryRef } from 'apollo-angular';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  query: QueryRef<any>;
  users: Observable<User[]>;
  constructor(private apollo: Apollo) { }

  ngOnInit() {

    this.query = this.apollo.watchQuery<Query>({
      query: USER_DETAILS_QUERY
    });

    this.query.valueChanges.subscribe((user) => {
        this.users = user.data.allUsers;
      });

  }

}
