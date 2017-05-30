import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';

/*
 * Description: Register Service
 * Author: Pardip Bhatti (Gagudeep)
 * Date: 27 May 2017
 */
import { RegisterService } from './register.service';

/*
 * Description: Component Declaration
 * Author: Pardip Bhatti (Gagudeep)
 * Date: 27 May 2017
 */
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  /*
   * Description: Variable Declaration
   * Author: Pardip Bhatti (Gagudeep)
   * Date: 27 May 2017
   */
  gpRegister: FormGroup;
  data: any;
  userInput;

  /*
   * Description: Constructor
   * Author: Pardip Bhatti (Gagudeep)
   * Date: 27 May 2017
   */
  constructor(private fb: FormBuilder, private _registerService: RegisterService, private router: Router) {

    this.gpRegister = fb.group({
      'firstName': [null, Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(50)])],
      'lastName': [null, Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(50)])],
      'email': [null, Validators.required],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(50)])],
      'confirmPassword': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(50)])],
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
   * Description: registerUser
   * Author: Pardip Bhatti (Gagudeep)
   * Date: 27 May 2017
   */
  registerUser(data) {
    this.userInput = 'firstName=' + data.firstName + '&lastName=' + data.lastName + '&email=' + data.email + '&password=' + data.password + '&confirmPassword=' + data.confirmPassword;
    this._registerService.gpRegisterUser(this.userInput).then(response => {
      console.log(response);
    });
  }

}
