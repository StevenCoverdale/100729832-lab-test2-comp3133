import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Launch } from '../models/launch.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SpacexService {
  private baseUrl = 'https://api.spacexdata.com/v3';

  launchesSignal = signal<Launch[]>([]);
  selectedLaunchSignal = signal<Launch | null>(null);

  constructor(private http: HttpClient) {}

  getAllLaunches(): Observable<Launch[]> {
    return this.http.get<Launch[]>(`${this.baseUrl}/launches`);
  }

  getLaunchByFlightNumber(flightNumber: number): Observable<Launch> {
    return this.http.get<Launch>(`${this.baseUrl}/launches/${flightNumber}`);
  }

  getLaunchesByYear(year: string): Observable<Launch[]> {
  return this.http.get<Launch[]>(`${this.baseUrl}/launches`, {
    params: { launch_year: year }
  });
  }
}