import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamoDbUsersComponent } from './dynamo-db-users.component';

describe('DynamoDbUsersComponent', () => {
  let component: DynamoDbUsersComponent;
  let fixture: ComponentFixture<DynamoDbUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamoDbUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamoDbUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
