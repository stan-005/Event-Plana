import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageOrganizersComponent } from './manage-organizers.component';

describe('ManageOrganizersComponent', () => {
  let component: ManageOrganizersComponent;
  let fixture: ComponentFixture<ManageOrganizersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageOrganizersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageOrganizersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
