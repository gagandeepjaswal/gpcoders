import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../auth/login/login.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private  authService: LoginService) { }

  ngOnInit() {
  }

  /*
   * Description: logout user and destroy local storage
   * Author: Pardip Bhatti (Gagudeep)
   * Date: 27 May 2017
   */
  logout() {
    this.authService.logout();
  }
}
