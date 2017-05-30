import {Component, OnInit} from '@angular/core';
import {LoginService} from './auth/login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  /*
   * Description: Constructor
   * Author: Pardip Bhatti (Gagudeep)
   * Date: 27 May 2017
   */
  constructor(private authService: LoginService) {

  }

  /*
   * Description: first init function
   * Author: Pardip Bhatti (Gagudeep)
   * Date: 27 May 2017
   */
  ngOnInit() {

  }

  /*
   * Description: check user login
   * Author: Pardip Bhatti (Gagudeep)
   * Date: 27 May 2017
   */
   isLoggedIn() {
     return this.authService.isLoggedIn();
   }
}
