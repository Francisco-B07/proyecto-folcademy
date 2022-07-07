import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSuscripcionComponent } from './card-suscripcion.component';

describe('CardSuscripcionComponent', () => {
  let component: CardSuscripcionComponent;
  let fixture: ComponentFixture<CardSuscripcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardSuscripcionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSuscripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
