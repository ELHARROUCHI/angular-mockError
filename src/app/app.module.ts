import { LoggerService } from './logger.service';
import { FauxHttpService } from './faux-http.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [FauxHttpService, LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
