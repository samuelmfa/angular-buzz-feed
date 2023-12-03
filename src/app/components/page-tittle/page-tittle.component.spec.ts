/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PageTittleComponent } from './page-tittle.component';

describe('PageTittleComponent', () => {
  let component: PageTittleComponent;
  let fixture: ComponentFixture<PageTittleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageTittleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTittleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
