import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrouselComponent } from './crousel.component';

describe('CrouselComponent', () => {
  let component: CrouselComponent;
  let fixture: ComponentFixture<CrouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
