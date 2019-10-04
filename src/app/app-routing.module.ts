import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { DynamoDbUsersListComponent } from './dynamo-db-users-list/dynamo-db-users-list.component';

const routes: Routes = [
  { path: '', component: DynamoDbUsersListComponent },
  { path: 'list-user', component: ListUsersComponent },
  { path: 'add-user', component: AddUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
