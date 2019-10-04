import { reducer, appReducerState } from './app-reducer';
import { ActionReducerMap } from '@ngrx/store';

interface AppState {
  appReducer: appReducerState;
}
export const reducers: ActionReducerMap<AppState> = {
  appReducer: reducer
};
