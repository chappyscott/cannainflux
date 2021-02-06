import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let dom: any;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AppComponent],
        imports: [RouterTestingModule],
      }).compileComponents();

      fixture = TestBed.createComponent(AppComponent);
      component = fixture.componentInstance;

      dom = fixture.nativeElement;
    })
  );

  test('should exist', () => {
    expect(component).toBeDefined();
  });

  test('title should be Welcome to cannainflux', () => {
    expect(component.title).toEqual('cannainflux');
  });

  it('should render title', () => {
    fixture.detectChanges();
    expect(dom.querySelector('.content span').textContent).toContain('cannainflux app is running!');
  });
});
