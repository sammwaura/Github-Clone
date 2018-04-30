import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';

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

  ngOnInit() {
  }

}
 