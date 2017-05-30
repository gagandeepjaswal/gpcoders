import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Router} from "@angular/router";

@Injectable()
export class LoginService {

  /*
   * Description: Header types
   * Author: Pardip Bhatti (Gagudeep)
   * Date: 27 May 2017
   */
  private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});

  /*
   * Description: variables declaration
   * Author: Pardip Bhatti (Gagudeep)
   * Date: 27 May 2017
   */
  private url = 'http://gpcoders.com/gp-admin';

  /*
   * Description: Constructors
   * Author: Pardip Bhatti (Gagudeep)
   * Date: 27 May 2017
   */
  constructor(private http: Http, private router: Router) { }

  /*
   * Description: sending request to server for login
   * Author: Pardip Bhatti (Gagudeep)
   * Date: 27 May 2017
   */
  authenticateUser(data): Promise<any> {
    return this.http.post(this.url + '/gp-auth', data, {headers: this.headers})
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  /*
   * Description: Check if user is logged in
   * Author: Pardip Bhatti (Gagudeep)
   * Date: 27 May 2017
   */
  isLoggedIn() {
    if(localStorage.getItem('gpToken')) {
      return true;
    }
  }

  /*
   * Description: Check if user is logged in
   * Author: Pardip Bhatti (Gagudeep)
   * Date: 27 May 2017
   */
  logout() {
    if(localStorage.getItem('gpToken')) {
      localStorage.clear();
      this.router.navigateByUrl('/gp-login');
    }
  }

  /*
   * Function Name: handleError()
   * Date: 14 Apr, 2017
   */
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
