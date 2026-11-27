import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommunicationParent } from './communication-parent';

describe('CommunicationParent', () => {
  let component: CommunicationParent;
  let fixture: ComponentFixture<CommunicationParent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommunicationParent],
    }).compileComponents();

    fixture = TestBed.createComponent(CommunicationParent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
