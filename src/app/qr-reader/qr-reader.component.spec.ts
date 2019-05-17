import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QrReaderComponent } from './qr-reader.component';

describe('QrReaderComponent', () => {
  let component: QrReaderComponent;
  let fixture: ComponentFixture<QrReaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QrReaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QrReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
