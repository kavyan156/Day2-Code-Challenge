import { ADD_USER } from 'src/app/shared/graphql-queries/queries';
import { REMOVE_USER, CLEAR_USERS } from '../actions/app-action';


export interface appReducerState {
  users: any[];
  lastUpdate: Date;
}

const initialState: appReducerState = {
  users: [],
  lastUpdate: null
};


export function reducer(state = initialState, action): appReducerState {
  switch (action.type) {
    case ADD_USER:
      const newUser = {id: state.users.length + 1, title: action.title};
      return Object.assign({}, state, { users: state.users.concat(newUser),
      lastUpdate: new Date()});
    case REMOVE_USER:
      return Object.assign({}, state, {
        users: state.users.filter(t => t.id !== action.id),
        lastUpdate: new Date()
      });
    case CLEAR_USERS:
      return Object.assign({}, state, {
         users: [],
         lastUpdate: new Date()
       });
  }
  return state;
}
