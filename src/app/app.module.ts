import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { FormsModule } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';

import {AppService} from './app.service';

import { AppComponent } from './app.component';
import { GithubCloneComponent } from './github-clone/github-clone.component';

const appRoutes: Routes = [
  {path:'githubclone', component: GithubCloneComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    GithubCloneComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
