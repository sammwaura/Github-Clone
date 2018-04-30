import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-github-clone',
  templateUrl: './github-clone.component.html',
  styleUrls: ['./github-clone.component.css']
})
export class GithubCloneComponent implements OnInit {
  public app:any[];
  private repos: any[];
  username:string;


  constructor(private appService: AppService) {
this.appService.getappInfo().subscribe(app => {
  console.log(app);
  this.app = app;
});
   this.appService.getappRepos().subscribe(repos => {
     console.log(repos);
     this.repos = repos;
   });
   }

   
  ngOnInit() {
  }
  findapp() {
    this.appService.updateapp(this.username);
    this.appService.getappInfo().subscribe(app =>{
      console.log(app);
      this.app = app;
    });

    this.appService.getappRepos().subscribe(repos  => {
      console.log(repos);
      this.repos = repos;
    });
   }

}
 