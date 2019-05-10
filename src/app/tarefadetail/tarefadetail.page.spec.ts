import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarefadetailPage } from './tarefadetail.page';

describe('TarefadetailPage', () => {
  let component: TarefadetailPage;
  let fixture: ComponentFixture<TarefadetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarefadetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarefadetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
