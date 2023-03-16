import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MorsekodePipe } from './pipes/morsekode.pipe';
import { Md5Pipe } from './pipes/md5.pipe';


@NgModule({
  declarations: [
    AppComponent,
    MorsekodePipe,
    Md5Pipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
