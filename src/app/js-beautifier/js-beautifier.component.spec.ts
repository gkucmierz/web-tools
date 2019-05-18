import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsBeautifierComponent } from './js-beautifier.component';

describe('JsBeautifierComponent', () => {
  let component: JsBeautifierComponent;
  let fixture: ComponentFixture<JsBeautifierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsBeautifierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsBeautifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
