import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsUsuarioComponent } from './skills-usuario.component';

describe('SkillsUsuarioComponent', () => {
  let component: SkillsUsuarioComponent;
  let fixture: ComponentFixture<SkillsUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
