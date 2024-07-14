import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTopHeaderComponent } from './admin-top-header.component';

describe('AdminTopHeaderComponent', () => {
  let component: AdminTopHeaderComponent;
  let fixture: ComponentFixture<AdminTopHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminTopHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminTopHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
