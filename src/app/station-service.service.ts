import { Injectable } from '@angular/core';
import { Station } from './station.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StationServiceService {

  constructor(private httpClient: HttpClient) {}

  getStations(): Observable<Station[]> {
    return this.httpClient.get('./assets/stations.json').pipe(map(data => data as Station[]));
  }
}
