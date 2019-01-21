import { Component, OnInit } from '@angular/core';
import {Http, Headers} from '@angular/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  status: string;
  userObj: object = [];
  url = "http://localhost:5515/credentials.json";

  constructor(private http :Http) { }
  // private headers = new Headers({
  //   'content-type' :  "application/json",
  //   'Authorization': 'my-auth-token'
  // });

  onLoginClick(){
    this.userObj = {
      "username": this.username,
      "password": this.password
    };
    this.http.post(this.url, JSON.stringify(this.userObj))

  }
  ngOnInit() {
  }

}
