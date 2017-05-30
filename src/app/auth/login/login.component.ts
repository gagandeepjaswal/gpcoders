import {Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

/*
 * Description: Login Service
 * Author: Pardip Bhatti (Gagudeep)
 * Date: 27 May 2017
 */
import { LoginService } from './login.service';
import {ValidationsComponent} from "./validations.component";

/*
 * Description: Component Decalration
 * Author: Pardip Bhatti (Gagudeep)
 * Date: 27 May 2017
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  /*
   * Description: Variable Declaration
   * Author: Pardip Bhatti (Gagudeep)
   * Date: 27 May 2017
   */
  gpLogin: FormGroup;
  data: any;
  userInput;
  errors = [];
  @ViewChild(ValidationsComponent) validationComponent: ValidationsComponent;


  /*
   * Description: Gloably constructor for this component
   * Author: Pardip Bhatti (Gagudeep)
   * Date: 27 May 2017
   */
  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router, public toastr: ToastsManager, private vcr: ViewContainerRef) {

    this.toastr.setRootViewContainerRef(vcr)

    this.gpLogin = fb.group({
      'email': [null, Validators.required],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(50)])]

    });


  }

  /*
   * Description: First Init ngOnInit Function
   * Author: Pardip Bhatti (Gagudeep)
   * Date: 27 May 2017
   */
  ngOnInit() {
    if(localStorage.getItem('gpToken')) {
      this.router.navigateByUrl('/gp-dashboard');
    }
  }


  /*
   * Description: loginUser
   * Author: Pardip Bhatti (Gagudeep)
   * Date: 27 May 2017
   */
  loginUser(data) {
    this.userInput = 'email=' + data.email + '&password=' + data.password;
    this.loginService.authenticateUser(this.userInput).then(response => {

      // @ If user successfully logged in
      if ( response.status == 'gpSuccess' ) {
        this.loginSuccess(response.msg);
        setTimeout(() => {
          localStorage.setItem('id', response.gpData.id);       // @ Set id to local storage
          localStorage.setItem('gpToken', response.gpToken);    // @ Set token to local storage
          this.router.navigateByUrl("/gp-dashboard");
        }, 2000);
      }

      // @ If user fail to login
      if ( response.status == 'gpFailed' ) {
        this.loginFailed(response.msg);
      }

      // @ if validation errors found
      if( response.error ) {

        this.errors = response.error;
      }
    });
  }

  /*
   * Description: Login Failed
   * Author: Pardip Bhatti (Gagudeep)
   * Date: 27 May 2017
   */
  loginFailed(gpData) {
    this.toastr.error(gpData, 'Oops!');
  }

  /*
   * Description: Login Failed
   * Author: Pardip Bhatti (Gagudeep)
   * Date: 27 May 2017
   */
  loginValidationErrors(error) {
    this.toastr.custom('<ul style="color: red"> {{ error|json }} </ul>', null, {enableHTML: true});
  }

  /*
   * Description: Login Failed
   * Author: Pardip Bhatti (Gagudeep)
   * Date: 27 May 2017
   */
  loginSuccess(gpData) {
    this.toastr.success(gpData, 'Success!');
  }

}
