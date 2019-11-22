import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatItemComponent } from './feat-item.component';

describe('FeatItemComponent', () => {
  let component: FeatItemComponent;
  let fixture: ComponentFixture<FeatItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FeatItemComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
