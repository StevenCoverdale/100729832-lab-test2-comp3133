import { Component, computed, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SpacexService } from '../../services/spacex.service';
import { Launch } from '../../models/launch.model';

@Component({
  selector: 'app-missiondetails',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatToolbarModule],
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.scss']
})
export class MissiondetailsComponent {

  // Signals
  mission = signal<Launch | null>(null);
  loading = signal(true);
  error = signal<string | null>(null);

  constructor(
    private route: ActivatedRoute,
    private spacexService: SpacexService
  ) {

    // React to route param changes
    effect(() => {
      const param = this.route.snapshot.paramMap.get('flight_number');
      const flightNumber = Number(param);

      if (!flightNumber) {
        this.error.set('Invalid mission ID');
        this.loading.set(false);
        return;
      }

      this.loading.set(true);
      this.error.set(null);

      this.spacexService.getLaunchByFlightNumber(flightNumber).subscribe({
        next: (mission) => {
          this.mission.set(mission);
          this.loading.set(false);
        },
        error: () => {
          this.error.set('Failed to load mission details');
          this.loading.set(false);
        }
      });
    });
  }
}