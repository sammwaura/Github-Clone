import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';

@Component({
  selector: 'app-github-clone',
  templateUrl: './github-clone.component.html',
  styleUrls: ['./github-clone.component.css']
})
export class GithubCloneComponent implements OnInit {
  private app:any[];

  constructor(private appService: AppService) {
    this.appService.getProfileInfo().subscribe(app =>{
      console.log(app);
      this.app = app;
    } )
   }

  ngOnInit() {
  }

}
