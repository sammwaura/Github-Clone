import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GithubCloneComponent } from './github-clone/github-clone.component';


@NgModule({
  declarations: [
    AppComponent,
    GithubCloneComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
