import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { Electricity } from "../electricity/electricity";
import { OurServices } from "../our-services/our-services";


@Component({
  selector: 'app-home',
  imports: [MatButtonModule, MatIconModule, MatToolbarModule, MatFormFieldModule, MatInputModule, CommonModule, Electricity, OurServices],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
