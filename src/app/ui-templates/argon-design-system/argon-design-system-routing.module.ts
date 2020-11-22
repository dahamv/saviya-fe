import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { ArgonDesignSystemComponent } from './argon-design-system.component';

const routes: Routes =[{
                    path: '',
                    //shown in TourOfHeroesComponent <router-outlet>
                    component: ArgonDesignSystemComponent,
                    /**
                    * CrisisCenterComponent <router-outlet> loads the child componenet CrisisListComponent.
                    * not in the RouterOutlet of the AppComponent shell.
                    */
                    children: [
                        { path: 'home',             component: HomeComponent },
                        { path: 'user-profile',     component: ProfileComponent },
                        { path: 'register',           component: SignupComponent },
                        { path: 'landing',          component: LandingComponent },
                        { path: 'login',          component: LoginComponent },
                        { path: '', redirectTo: 'home', pathMatch: 'full' }
                    ]
            }];



@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ArgonDesignSystemRoutingModule { }
