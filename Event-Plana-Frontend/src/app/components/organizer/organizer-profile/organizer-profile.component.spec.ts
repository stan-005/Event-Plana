import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizerProfileComponent } from './organizer-profile.component';

describe('OrganizerProfileComponent', () => {
  let component: OrganizerProfileComponent;
  let fixture: ComponentFixture<OrganizerProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganizerProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganizerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
