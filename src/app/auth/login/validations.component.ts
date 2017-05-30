import {Component, Input, OnInit, Output, ViewChild, ViewContainerRef} from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

/*
 * Description: Login Service
 * Author: Pardip Bhatti (Gagudeep)
 * Date: 27 May 2017
 */
import { LoginService } from './login.service';

/*
 * Description: Component Decalration
 * Author: Pardip Bhatti (Gagudeep)
 * Date: 27 May 2017
 */
@Component({
  selector: 'gp-validations',
  templateUrl: './validations.component.html'
})
export class ValidationsComponent implements OnInit {

  /*
   * Description: Variable Declaration
   * Author: Pardip Bhatti (Gagudeep)
   * Date: 27 May 2017
   */
   @Input() error: string[];

   modalShow = true;
  /*
   * Description: Gloably constructor for this component
   * Author: Pardip Bhatti (Gagudeep)
   * Date: 27 May 2017
   */
  constructor(public toastr: ToastsManager, private vcr: ViewContainerRef) {}

  /*
   * Description: First Init ngOnInit Function
   * Author: Pardip Bhatti (Gagudeep)
   * Date: 27 May 2017
   */
  ngOnInit() {}

  gpHideModal() {
    this.modalShow = false;
  }
}
