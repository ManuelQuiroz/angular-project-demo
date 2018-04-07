import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiAlertComponent } from './ui-alert.component';

describe('UiAlertComponent', () => {
  let component: UiAlertComponent;
  let fixture: ComponentFixture<UiAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
