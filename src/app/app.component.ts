import { FauxHttpService } from './faux-http.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello world'
  constructor(fauxHttpService: FauxHttpService) {
    fauxHttpService.fetchFail();
  }
}
