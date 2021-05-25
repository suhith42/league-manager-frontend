import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchGenerateComponent } from './match-generate.component';

describe('MatchGenerateComponent', () => {
  let component: MatchGenerateComponent;
  let fixture: ComponentFixture<MatchGenerateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchGenerateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchGenerateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
