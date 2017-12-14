import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RobotsComponent} from './robots/robots.component';
import {RobotDetailComponent} from './robot-detail/robot-detail.component';
import {UserDetailComponent} from './user-detail/user-detail.component';
import {AuthenticationComponent} from './authentication/authentication.component';

const routes: Routes = [
  {path: 'robots', component: RobotsComponent},
  {path: 'robots/:id', component: RobotDetailComponent},
  {path: 'account', component: UserDetailComponent},
  {path: '', component: AuthenticationComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(
      routes,
      {enableTracing: true}
    )
  ]
})
export class AppRoutingModule {
}
