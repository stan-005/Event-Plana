import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizerTopHeaderComponent } from './organizer-top-header.component';

describe('OrganizerTopHeaderComponent', () => {
  let component: OrganizerTopHeaderComponent;
  let fixture: ComponentFixture<OrganizerTopHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganizerTopHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganizerTopHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
