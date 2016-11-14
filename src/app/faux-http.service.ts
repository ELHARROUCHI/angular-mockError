import { LoggerService } from './logger.service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class FauxHttpService {

  constructor(private http: Http, private logger: LoggerService) { }

  public fetchFail(): void {
    this.http
      .get('http://httpstat.us/403')
      .subscribe(
        (data) => {this.logger.log('this is a success')},
        (err) => {this.logger.log(`error status code: ${err.status}`)}
      )
  }

}
