import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatureConverterComponent } from './temperature-converter.component';

describe('TemperatureConverterComponent', () => {
  let component: TemperatureConverterComponent;
  let fixture: ComponentFixture<TemperatureConverterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemperatureConverterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemperatureConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
