import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { User } from '../user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new User();
  constructor(private _service : RegistrationService) { }

  ngOnInit(): void {
    console.log(this.user);
  }

  loginUser(){
    this._service.loginUserFormRemote(this.user).subscribe(
      data => console.log("sucess"),
      error => console.log("fail :(")
    );
  }
}
