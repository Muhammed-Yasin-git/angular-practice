import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LabourCard } from './labour-card';

describe('LabourCard', () => {
  let component: LabourCard;
  let fixture: ComponentFixture<LabourCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabourCard],
    }).compileComponents();

    fixture = TestBed.createComponent(LabourCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
