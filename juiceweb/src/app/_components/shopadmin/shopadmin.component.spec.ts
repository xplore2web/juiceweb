/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ShopadminComponent } from './shopadmin.component';

describe('ShopadminComponent', () => {
  let component: ShopadminComponent;
  let fixture: ComponentFixture<ShopadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
