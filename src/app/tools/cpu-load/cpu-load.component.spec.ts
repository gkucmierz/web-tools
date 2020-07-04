import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpuLoadComponent } from './cpu-load.component';

describe('CpuLoadComponent', () => {
  let component: CpuLoadComponent;
  let fixture: ComponentFixture<CpuLoadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpuLoadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpuLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
