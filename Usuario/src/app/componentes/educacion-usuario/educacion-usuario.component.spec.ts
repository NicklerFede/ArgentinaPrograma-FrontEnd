import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducacionUsuarioComponent } from './educacion-usuario.component';

describe('EducacionUsuarioComponent', () => {
  let component: EducacionUsuarioComponent;
  let fixture: ComponentFixture<EducacionUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducacionUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducacionUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
