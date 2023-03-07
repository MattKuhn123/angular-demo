import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { StationServiceService } from './station-service.service';
import { Station } from './station.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:  [ StationServiceService ]
})
export class AppComponent {
  title = 'my-app';
  stations: Observable<Station[]>;

  constructor(private service: StationServiceService) {
    this.stations = this.service.getStations();
  }
}
