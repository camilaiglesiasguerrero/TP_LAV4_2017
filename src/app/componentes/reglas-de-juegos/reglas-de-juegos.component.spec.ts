import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReglasDeJuegosComponent } from './reglas-de-juegos.component';

describe('ReglasDeJuegosComponent', () => {
  let component: ReglasDeJuegosComponent;
  let fixture: ComponentFixture<ReglasDeJuegosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReglasDeJuegosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReglasDeJuegosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
