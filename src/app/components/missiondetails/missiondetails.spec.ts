import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Missiondetails } from './missiondetails';

describe('Missiondetails', () => {
  let component: Missiondetails;
  let fixture: ComponentFixture<Missiondetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Missiondetails],
    }).compileComponents();

    fixture = TestBed.createComponent(Missiondetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
