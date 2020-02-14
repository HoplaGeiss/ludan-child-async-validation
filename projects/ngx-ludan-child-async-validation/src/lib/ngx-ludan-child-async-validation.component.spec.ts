import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxLudanChildAsyncValidationComponent } from './ngx-ludan-child-async-validation.component';

describe('NgxLudanChildAsyncValidationComponent', () => {
  let component: NgxLudanChildAsyncValidationComponent;
  let fixture: ComponentFixture<NgxLudanChildAsyncValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxLudanChildAsyncValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxLudanChildAsyncValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
