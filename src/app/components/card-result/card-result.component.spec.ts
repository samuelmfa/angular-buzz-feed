/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CardResultComponent } from './card-result.component';

describe('CardResultComponent', () => {
  let component: CardResultComponent;
  let fixture: ComponentFixture<CardResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
