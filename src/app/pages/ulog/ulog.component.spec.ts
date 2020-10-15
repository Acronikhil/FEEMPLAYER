import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UlogComponent } from './ulog.component';

describe('UlogComponent', () => {
  let component: UlogComponent;
  let fixture: ComponentFixture<UlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
