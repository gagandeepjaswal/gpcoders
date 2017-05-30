import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { ModalModule } from 'ngx-bootstrap/modal';


/*
 * Description: Custom Components
 * Author: Pardip Bhatti (Gagudeep)
 * Date: 25 May 2017
 */
import { AppComponent } from './app.component';

import { LoginComponent } from './auth/login/login.component';
import { ValidationsComponent } from './auth/login/validations.component';
import { RegisterComponent } from './auth/register/register.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';

import { DashboardComponent } from './main/dashboard/dashboard.component';
import { ProfileComponent } from './main/profile/profile.component';
import { CategoriesComponent } from './main/categories/categories.component';
import { UsersComponent } from './main/users/users.component';

import { PageNotFoundComponent } from './main/page-not-found/page-not-found.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';


/*
 * Description: Custom Services
 * Author: Pardip Bhatti (Gagudeep)
 * Date: 27 May 2017
 */
import { LoginService } from './auth/login/login.service';
import { RegisterService } from './auth/register/register.service';
import { AuthGaurdGuard } from './auth-gaurd.guard';


/*
 * Description: Routing for rendering pages
 * Author: Pardip Bhatti (Gagudeep)
 * Date: 25 May 2017
 */
const gpRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'gp-login', component: LoginComponent },
  { path: 'gp-register', component: RegisterComponent },
  { path: 'gp-forgot-password', component: ForgotPasswordComponent },
  { path: 'gp-dashboard', component: DashboardComponent, canActivate: [AuthGaurdGuard] },
  { path: '**', component: PageNotFoundComponent }
];

/*
 * Description: Componets, Services, Directives, Pipes Declaration and Imports libraries
 * Author: Pardip Bhatti (Gagudeep)
 * Date: 25 May 2017
 */
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ProfileComponent,
    CategoriesComponent,
    UsersComponent,
    ForgotPasswordComponent,
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ValidationsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(gpRoutes),
    BrowserAnimationsModule,
    ToastModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [LoginService, RegisterService, AuthGaurdGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
