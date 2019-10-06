import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TambahProdPage } from './tambah-prod.page';

describe('TambahProdPage', () => {
  let component: TambahProdPage;
  let fixture: ComponentFixture<TambahProdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TambahProdPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TambahProdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
