import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import {AppService} from './app.service';

import { AppComponent } from './app.component';
import { GithubCloneComponent } from './github-clone/github-clone.component';


@NgModule({
  declarations: [
    AppComponent,
    GithubCloneComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
