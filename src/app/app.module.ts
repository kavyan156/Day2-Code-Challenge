import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { GraphQLModule } from './graphql.module';
import { MaterialModule} from './material.module';
import {StoreModule} from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';



import { AppComponent } from './app.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import {reducers} from './stores/reducers';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { DynamoDbUsersComponent } from './dynamo-db-users/dynamo-db-users.component';
import { DynamoDbUsersListComponent } from './dynamo-db-users-list/dynamo-db-users-list.component';


@NgModule({
  declarations: [
    AppComponent,
    ListUsersComponent,
    AddUserComponent,
    HeaderComponent,
    UserDashboardComponent,
    DynamoDbUsersComponent,
    DynamoDbUsersListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers, {}),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    }),
    GraphQLModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
