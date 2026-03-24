import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { ContactPerson } from "../../layout/contact-person/contact-person";
import { NeedSupport } from "../../layout/need-support/need-support";

@Component({
  selector: 'app-login-page',
  imports: [CommonModule, ContactPerson, NeedSupport],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {

  constructor(
            private router: Router,
            private route: ActivatedRoute
  ) {}

  currentStep: 'login' | 'loggedIn' | 'forgotPassword' | 'generatedCode' | 'verifyCode' |'changePassword' | 'LoginFurther' = 'login';

  goToStep(step: 'login' | 'loggedIn' | 'forgotPassword' | 'generatedCode' | 'verifyCode' | 'changePassword' | 'LoginFurther' ) {
    this.currentStep = step;
  }

  openPage() {
    this.router.navigate(['/electricity-comparision/delivery-address'], {});
  }

}
