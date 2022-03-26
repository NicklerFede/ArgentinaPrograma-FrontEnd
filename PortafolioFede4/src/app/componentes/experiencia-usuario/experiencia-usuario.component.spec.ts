import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciaUsuarioComponent } from './experiencia-usuario.component';

describe('ExperienciaUsuarioComponent', () => {
  let component: ExperienciaUsuarioComponent;
  let fixture: ComponentFixture<ExperienciaUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienciaUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienciaUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
