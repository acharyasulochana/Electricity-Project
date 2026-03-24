import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { ContactPerson } from "../../layout/contact-person/contact-person";
import { NeedSupport } from "../../layout/need-support/need-support";
@Component({
  selector: 'app-checkout-page',
  imports: [ContactPerson, NeedSupport, RouterModule, CommonModule, ContactPerson, NeedSupport],
  templateUrl: './checkout-page.html',
  styleUrl: './checkout-page.css',
})
export class CheckoutPage {
  constructor(
              private router: Router,
              private route: ActivatedRoute
  ) {}

  showConfirmation = false;

  openPage() {
    this.showConfirmation = true;
  }
}
