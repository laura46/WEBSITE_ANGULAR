import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HaircarepageComponent } from './haircarepage.component';

describe('HaircarepageComponent', () => {
  let component: HaircarepageComponent;
  let fixture: ComponentFixture<HaircarepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HaircarepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HaircarepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
