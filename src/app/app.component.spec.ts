import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';

import { FormsModule } from '@angular/forms';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatInput, MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Http2ServerRequest } from 'http2';

describe('AppComponent', () => {
  let component: AppComponent;
  let dom: any;
  let fixture: ComponentFixture<AppComponent>;
  let alertTextEl: HTMLInputElement;
  let alertButtonEl: HTMLButtonElement;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [RouterTestingModule, FormsModule, MatButtonModule, MatInputModule],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

    dom = fixture.nativeElement;
    alertTextEl = dom.querySelector('input');
    alertButtonEl = dom.querySelector('button');
  }));

  test('should exist', () => {
    expect(component).toBeDefined();
  });

  test('title should be Welcome to cannainflux', () => {
    expect(component.title).toEqual('cannainflux');
  });

  test('should render title', () => {
    fixture.detectChanges();
    expect(dom.querySelector('.content span').textContent).toContain('cannainflux app is running!');
  });

  test('should set alertText through ngModel', () => {
    fixture.detectChanges();

    alertTextEl.value = 'HelloWorld';
    alertTextEl.dispatchEvent(new Event('input'));

    fixture.detectChanges();
    expect(component.alertText).toEqual('HelloWorld');
  });

  test('should update HTML through alertText property', () => {
    fixture.detectChanges();
    component.alertText = 'HelloWorld!';
    alertTextEl.dispatchEvent(new Event('input'));

    fixture.detectChanges();
    expect(alertTextEl.value).toEqual(component.alertText);
  });

  test('clicking button should call handleAlert', fakeAsync(() => {
    spyOn(component, 'handleAlert');

    alertButtonEl.click();

    tick();
    expect(component.handleAlert).toHaveBeenCalled();
  }));

  test('should alert when button clicked', () => {
    spyOn(window, 'alert');
    component.alertText = 'Alert test';
    alertButtonEl.click();
    expect(window.alert).toHaveBeenCalledWith(component.alertText);
  });
});
