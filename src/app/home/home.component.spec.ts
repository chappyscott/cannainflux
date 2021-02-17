import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';

import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [RouterTestingModule, FormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('title should be displayed', () => {
    const result = fixture.nativeElement.querySelector('.card-header').innerHTML;

    expect(result).toContain(component.pageTitle);
  });
});
