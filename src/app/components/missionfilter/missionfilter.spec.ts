import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Missionfilter } from './missionfilter';

describe('Missionfilter', () => {
  let component: Missionfilter;
  let fixture: ComponentFixture<Missionfilter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Missionfilter],
    }).compileComponents();

    fixture = TestBed.createComponent(Missionfilter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
