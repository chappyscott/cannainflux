import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WrestlerComponent } from './wrestler-list.component';

describe('WrestlersComponent', () => {
  let component: WrestlerComponent;
  let fixture: ComponentFixture<WrestlerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WrestlerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrestlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
