import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeModule } from './home/home.module';
import { LoginComponent } from './login/login.component';
import { ArgonDesignSystemComponent } from './argon-design-system.component';
import { ArgonDesignSystemRoutingModule } from './argon-design-system-routing.module';

@NgModule({
  declarations: [
    ArgonDesignSystemComponent,
    SignupComponent,
    LandingComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    HomeModule,
    ArgonDesignSystemRoutingModule
  ],
  providers: [],
})
export class ArgonDesignSystemModule { }
