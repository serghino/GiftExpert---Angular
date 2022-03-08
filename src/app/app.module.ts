import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';


import { AppComponent } from './app.component';
import { GifsModule } from './gifs/gifs.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    GifsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
