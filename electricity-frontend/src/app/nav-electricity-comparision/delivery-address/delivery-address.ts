import { Component } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { Sidebar } from '../../layout/sidebar/sidebar';
import { MatIcon } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';
import { ContactPerson } from "../../layout/contact-person/contact-person";
import { AboutUs } from "../../pages/about-us/about-us";
import { NeedSupport } from "../../layout/need-support/need-support";

@Component({
  selector: 'app-delivery-address',
  imports: [Sidebar, ContactPerson, NeedSupport, MatDatepickerModule, MatNativeDateModule, CommonModule, MatIcon, FormsModule, RouterModule, ContactPerson, AboutUs, NeedSupport],
  templateUrl: './delivery-address.html',
  styleUrl: './delivery-address.css',
})
export class DeliveryAddress {

  constructor(
              private router: Router,
              private route: ActivatedRoute
  ) {}

  openPage() {
    this.router.navigate(['/electricity-comparision/connection-data'], {});
  }

}
