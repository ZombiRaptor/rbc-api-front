import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {UserComponent} from './user/user.component';
import {RobotsComponent} from './robots/robots.component';
import {AuthenticationComponent} from './authentication/authentication.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {RobotDetailComponent} from './robot-detail/robot-detail.component';
import {UserDetailComponent} from './user-detail/user-detail.component';
import {UserService} from './services/user.service';
import {RobotService} from './services/robot.service';

import {AppRoutingModule} from './/app-routing.module';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RobotsComponent,
    AuthenticationComponent,
    LoginComponent,
    RegisterComponent,
    RobotDetailComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UserService, RobotService, RobotService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
