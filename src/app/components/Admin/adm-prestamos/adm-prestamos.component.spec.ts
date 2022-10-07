import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmPrestamosComponent } from './adm-prestamos.component';

describe('AdmPrestamosComponent', () => {
  let component: AdmPrestamosComponent;
  let fixture: ComponentFixture<AdmPrestamosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmPrestamosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmPrestamosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
