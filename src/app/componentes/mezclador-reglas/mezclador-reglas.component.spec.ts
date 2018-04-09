import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MezcladorReglasComponent } from './mezclador-reglas.component';

describe('MezcladorReglasComponent', () => {
  let component: MezcladorReglasComponent;
  let fixture: ComponentFixture<MezcladorReglasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MezcladorReglasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MezcladorReglasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
