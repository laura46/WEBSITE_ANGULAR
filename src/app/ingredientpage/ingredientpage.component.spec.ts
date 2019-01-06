import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientpageComponent } from './ingredientpage.component';

describe('IngredientpageComponent', () => {
  let component: IngredientpageComponent;
  let fixture: ComponentFixture<IngredientpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredientpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
