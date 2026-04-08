import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Missionlist } from './missionlist';

describe('Missionlist', () => {
  let component: Missionlist;
  let fixture: ComponentFixture<Missionlist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Missionlist],
    }).compileComponents();

    fixture = TestBed.createComponent(Missionlist);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
