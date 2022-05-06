import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonNavComponent } from './boton-nav.component';

describe('BotonNavComponent', () => {
  let component: BotonNavComponent;
  let fixture: ComponentFixture<BotonNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
