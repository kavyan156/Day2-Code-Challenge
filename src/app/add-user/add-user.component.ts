import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { NgForm } from '@angular/forms';
import { ADD_USER } from '../shared/graphql-queries/queries';
import { UserService } from '../shared/services/user.service';
import { REMOVE_USER } from '../stores/actions/app-action';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  users;
  constructor(private store: Store<any>, private user: UserService) {
  }

  ngOnInit() {
  }

  addUser(user: NgForm) {
    if (!user.value) { return; }
    this.store.dispatch({ type: ADD_USER, title: user.value });
    this.user.getAllState().subscribe((data) => {
      this.users = data.users;
    });
  }

  removeUser(todo) {
    this.store.dispatch({ type: REMOVE_USER, id: todo.id });
  }
}
