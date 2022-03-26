import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcercaDeUsuarioComponent } from './acerca-de-usuario.component';

describe('AcercaDeUsuarioComponent', () => {
  let component: AcercaDeUsuarioComponent;
  let fixture: ComponentFixture<AcercaDeUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcercaDeUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcercaDeUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
