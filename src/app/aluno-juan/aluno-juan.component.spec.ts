import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoJuanComponent } from './aluno-juan.component';

describe('AlunoJuanComponent', () => {
  let component: AlunoJuanComponent;
  let fixture: ComponentFixture<AlunoJuanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlunoJuanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlunoJuanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
