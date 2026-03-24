import { Component, AfterViewInit, ViewChild, ElementRef, Inject, PLATFORM_ID, afterNextRender } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { ContactPerson } from '../../layout/contact-person/contact-person';
import { NeedSupport } from '../../layout/need-support/need-support';
import { Sidebar } from '../../layout/sidebar/sidebar';

@Component({
  selector: 'app-payment-method',
  imports: [Sidebar, ContactPerson, NeedSupport, MatInputModule,  MatIconModule, CommonModule, FormsModule, RouterModule],
  templateUrl: './payment-method.html',
  styleUrl: './payment-method.css',
})
export class PaymentMethod {


  constructor(
              private router: Router,
              private route: ActivatedRoute
  ) {}

  openPage() {
    this.router.navigate(['/electricity-comparision/checkout'], {});
  }


}
