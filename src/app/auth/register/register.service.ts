import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class RegisterService {

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
  constructor(private http: Http) { }

  /*
   * Description: sending request to server for register
   * Author: Pardip Bhatti (Gagudeep)
   * Date: 27 May 2017
   */
  gpRegisterUser(data): Promise<any> {
    return this.http.post(this.url + '/gp-register', data, {headers: this.headers})
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  /*
   * Function Name: handleError()
   * Date: 27 May, 2017
   */
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
