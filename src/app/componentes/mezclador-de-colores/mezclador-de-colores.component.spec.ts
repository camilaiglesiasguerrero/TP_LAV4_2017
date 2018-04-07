import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MezcladorDeColoresComponent } from './mezclador-de-colores.component';

describe('MezcladorDeColoresComponent', () => {
  let component: MezcladorDeColoresComponent;
  let fixture: ComponentFixture<MezcladorDeColoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MezcladorDeColoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MezcladorDeColoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
