import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntimacaoComponent } from './intimacao.component';

describe('RegistrationComponent', () => {
  let component: IntimacaoComponent;
  let fixture: ComponentFixture<IntimacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntimacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntimacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
