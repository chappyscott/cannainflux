import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BracketEntryComponent } from './bracket-entry.component';

describe('BracketEntryComponent', () => {
  let component: BracketEntryComponent;
  let fixture: ComponentFixture<BracketEntryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BracketEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BracketEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
