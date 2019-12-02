import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellLookupComponent } from './spell-lookup.component';

describe('SpellLookupComponent', () => {
  let component: SpellLookupComponent;
  let fixture: ComponentFixture<SpellLookupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SpellLookupComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
