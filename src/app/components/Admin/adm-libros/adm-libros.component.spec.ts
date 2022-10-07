import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmLibrosComponent } from './adm-libros.component';

describe('AdmLibrosComponent', () => {
  let component: AdmLibrosComponent;
  let fixture: ComponentFixture<AdmLibrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmLibrosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
