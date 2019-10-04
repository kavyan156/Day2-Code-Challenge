import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { API } from 'aws-amplify';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  params = {
    headers: {}, // OPTIONAL
    response: true, // OPTIONAL (return the entire Axios response object instead of only response.data)
    queryStringParameters: { }
  };
  users = [];
  constructor(private store: Store<any>) { }

  getAllState() {
    return this.store.select('appReducer');
  }

  getUser() {
    return API.get('apidynamo', '/users', this.params);
  }
}
