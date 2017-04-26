/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FranchisehpComponent } from './franchisehp.component';

describe('FranchisehpComponent', () => {
  let component: FranchisehpComponent;
  let fixture: ComponentFixture<FranchisehpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FranchisehpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FranchisehpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
