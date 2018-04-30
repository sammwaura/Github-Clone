import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {app} from './app';
import {Repos} from './repos';
import {environment} from '../environments/environment';

 



@Injectable()
export class AppService {

  private username:string;
  private clientid:'617211a9b5a5d0b33ca4';
  private clientsecret:"c5d0f10358c5157044bca8d63b0f5d4098514ce6";
  constructor(private http:Http) {
    console.log("service is now ready!");
    this.username = "sammwaura";
  }

  getappInfo(){
    return this.http.get("https://api.github.com/users/"+ this.username + "?client_id=" + this.clientid + "&clientservice=" + this.clientsecret)
    .map(res => res.json());
  }

  getappRepos() {
    return this.http.get("https://api.github.com/users/"+ this.username + "/repos?client_id=" + this.clientid + "&clientservice=" + this.clientsecret)
    .map(res => res.json());
  }

  updateapp(username:string){
    this.username = username;
  }
}
