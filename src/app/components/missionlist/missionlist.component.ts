import { Component, OnInit, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

import { SpacexService } from '../../services/spacex.service';
import { MissionfilterComponent } from '../missionfilter/missionfilter.component';

@Component({
  selector: 'app-missionlist',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatToolbarModule,
    MissionfilterComponent
  ],
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.scss']
})
export class MissionlistComponent implements OnInit {

  loading = signal(true);
  error = signal<string | null>(null);

  constructor(
    private spacexService: SpacexService,
    private router: Router
  ) {}

  launches = computed(() => this.spacexService.launchesSignal());

  totalLaunches = computed(() => this.launches().length);

  ngOnInit(): void {
    this.spacexService.getAllLaunches().subscribe({
      next: (launches) => {
        this.spacexService.launchesSignal.set(launches);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Failed to load launches');
        this.loading.set(false);
      }
    });
  }

  onMissionSelected(flightNumber: number) {
    this.router.navigate(['/mission', flightNumber]);
  }
}