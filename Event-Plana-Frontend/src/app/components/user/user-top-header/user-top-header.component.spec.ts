import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTopHeaderComponent } from './user-top-header.component';

describe('UserTopHeaderComponent', () => {
  let component: UserTopHeaderComponent;
  let fixture: ComponentFixture<UserTopHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserTopHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserTopHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
