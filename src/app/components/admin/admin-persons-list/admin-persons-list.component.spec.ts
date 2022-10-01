import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPersonsListComponent } from './admin-persons-list.component';

describe('AdminPersonsListComponent', () => {
  let component: AdminPersonsListComponent;
  let fixture: ComponentFixture<AdminPersonsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPersonsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPersonsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
