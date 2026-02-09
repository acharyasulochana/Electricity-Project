import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-electricity',
  imports: [MatButtonModule, MatIconModule, MatToolbarModule, MatFormFieldModule, MatInputModule, CommonModule],
  templateUrl: './electricity.html',
  styleUrl: './electricity.css',
})
export class Electricity {

}
