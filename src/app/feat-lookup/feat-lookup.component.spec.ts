import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatLookupComponent } from './feat-lookup.component';

describe('FeatLookupComponent', () => {
  let component: FeatLookupComponent;
  let fixture: ComponentFixture<FeatLookupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FeatLookupComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
