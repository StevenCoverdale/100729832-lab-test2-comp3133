import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

import { SpacexService } from '../../services/spacex.service';
import { Launch } from '../../models/launch.model';

@Component({
  selector: 'app-missionfilter',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule
  ],
  templateUrl: './missionfilter.component.html',
  styleUrls: ['./missionfilter.component.scss']
})
export class MissionfilterComponent {

  form = new FormGroup({
    year: new FormControl<string | null>(null)
  });

  years: string[] = [
    '2006','2007','2008','2009','2010','2011','2012','2013',
    '2014','2015','2016','2017','2018','2019','2020'
  ];

  constructor(private spacexService: SpacexService) {}

  onFilter(): void {
    const year = this.form.value.year;

    if (!year) {
      this.spacexService.getAllLaunches().subscribe((launches: Launch[]) => {
        this.spacexService.launchesSignal.set(launches);
      });
      return;
    }

    this.spacexService.getLaunchesByYear(year).subscribe((launches: Launch[]) => {
      this.spacexService.launchesSignal.set(launches);
    });
  }

  onClear(): void {
    this.form.reset();
    this.spacexService.getAllLaunches().subscribe((launches: Launch[]) => {
      this.spacexService.launchesSignal.set(launches);
    });
  }
}