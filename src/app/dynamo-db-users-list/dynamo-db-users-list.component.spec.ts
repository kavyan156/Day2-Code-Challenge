import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamoDbUsersListComponent } from './dynamo-db-users-list.component';

describe('DynamoDbUsersListComponent', () => {
  let component: DynamoDbUsersListComponent;
  let fixture: ComponentFixture<DynamoDbUsersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamoDbUsersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamoDbUsersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
