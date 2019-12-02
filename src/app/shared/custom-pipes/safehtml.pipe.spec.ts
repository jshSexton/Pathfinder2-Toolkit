import { SafeHtmlPipe } from './safehtml.pipe';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('SafeHtmlPipe', () => {
  let component: SafeHtmlPipe;
  let fixture: ComponentFixture<SafeHtmlPipe>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SafeHtmlPipe]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafeHtmlPipe);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
