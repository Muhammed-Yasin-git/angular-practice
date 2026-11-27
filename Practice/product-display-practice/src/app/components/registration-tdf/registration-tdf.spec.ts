import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrationTdf } from './registration-tdf';

describe('RegistrationTdf', () => {
  let component: RegistrationTdf;
  let fixture: ComponentFixture<RegistrationTdf>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationTdf],
    }).compileComponents();

    fixture = TestBed.createComponent(RegistrationTdf);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
