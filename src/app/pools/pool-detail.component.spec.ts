import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PoolDetailComponent } from './pool-detail.component';

describe('PoolDetailComponent', () => {
  let component: PoolDetailComponent;
  let fixture: ComponentFixture<PoolDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PoolDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoolDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
