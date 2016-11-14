
/* tslint:disable:no-unused-variable */
import { FauxHttpService } from './faux-http.service';

import { MockBackend, MockConnection } from '@angular/http/testing';
import { Http, BaseRequestOptions } from '@angular/http';

import { TestBed, async, inject } from '@angular/core/testing';
import { Response, ResponseOptions } from '@angular/http';
import { LoggerService } from './logger.service';

fdescribe('Service: FauxHttp', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FauxHttpService,
        MockBackend,
        BaseRequestOptions,
        { 
          provide: LoggerService,
          useValue: {
            log: () => {}
          }
        },
        {
            provide: Http,
            useFactory: (backend: MockBackend, options: BaseRequestOptions) => {
                return new Http(backend, options);
            },
            deps: [MockBackend, BaseRequestOptions],
        }]
    });
  });

  it('should ...', inject([FauxHttpService], (service: FauxHttpService) => {
    expect(service).toBeTruthy();
  }));

  it('log 403 to console MOCK RESPOND', async(inject([MockBackend, FauxHttpService, LoggerService], (backend: MockBackend, service: FauxHttpService, logger: LoggerService) => {
    backend.connections.subscribe((connection: MockConnection): void => {
        connection.mockRespond(new Response(
          new ResponseOptions({
              type: 3,
              status: 403
          })));
      });
    
    spyOn(logger, 'log');
    service.fetchFail();
    expect(logger.log).not.toHaveBeenCalledWith('this is a success');
    expect(logger.log).toHaveBeenCalledWith('error status code: 403');
    }))
  )
  it('log 403 to console MOCK ERROR', async(inject([MockBackend, FauxHttpService, LoggerService], (backend: MockBackend, service: FauxHttpService, logger: LoggerService) => {
    backend.connections.subscribe((connection: MockConnection): void => {
        connection.mockError(new Error('403 Forbidden'));
    });
    
    spyOn(logger, 'log');
    service.fetchFail();
    expect(logger.log).not.toHaveBeenCalledWith('this is a success');
    expect(logger.log).toHaveBeenCalledWith('error status code: 403');
    }))
  )
});
