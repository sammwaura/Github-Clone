import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { FormsModule } from '@angular/forms';

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
    HttpModule,
    FormsModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
