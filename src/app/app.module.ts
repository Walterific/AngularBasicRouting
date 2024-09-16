import {AppComponent} from "./app.component";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule, Routes} from "@angular/router";
import {HomepageComponent} from "./components/homepage/homepage.component";
import {LoginComponent} from "./components/login/login.component";
import {LandingPageComponent} from "./components/landing-page/landing-page.component";
import {SignupComponent} from "./components/signup/signup.component";


const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'landing-page', component: LandingPageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent}
]

@NgModule({

  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, {enableTracing: true}),
  ],

  declarations: [
    AppComponent,
    HomepageComponent,
    LandingPageComponent,
    LoginComponent,
    SignupComponent,
  ],

  providers: [

  ],

  bootstrap: [
    AppComponent]

})

export class AppModule {}
