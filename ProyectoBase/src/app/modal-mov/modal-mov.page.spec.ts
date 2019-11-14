import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMovPage } from './modal-mov.page';

describe('ModalMovPage', () => {
  let component: ModalMovPage;
  let fixture: ComponentFixture<ModalMovPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalMovPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalMovPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});