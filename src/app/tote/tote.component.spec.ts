import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ToteComponent } from './tote.component';

describe('ToteComponent', () => {
  let component: ToteComponent;
  let fixture: ComponentFixture<ToteComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ToteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
