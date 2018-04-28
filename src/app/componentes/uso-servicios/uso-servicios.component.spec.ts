import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsoServiciosComponent } from './uso-servicios.component';

describe('UsoServiciosComponent', () => {
  let component: UsoServiciosComponent;
  let fixture: ComponentFixture<UsoServiciosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsoServiciosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsoServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
