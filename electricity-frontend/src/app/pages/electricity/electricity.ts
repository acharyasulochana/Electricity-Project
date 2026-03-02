import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-electricity',
  imports: [MatButtonModule, MatIconModule, MatInputModule, CommonModule, MatDialogModule],
  templateUrl: './electricity.html',
  styleUrl: './electricity.css',
})
export class Electricity {

  constructor(public dialog: MatDialog) {}

    discountinfo = `<p> <strong>So haben wir gerechnet </strong> </p>
      <p> Wohnort: <i> Dortmund, 44141 </i>
       Jahresverbrauch: <i> 4.000 kWh </i> </p>
      <p> Günstigster Tarif: immergrün! Spar Smart FairMax, Kosten im ersten Jahr: 920,84 Euro </p>
      <p> Grundversorgungstarif: Dortmunder Energie- und Wasserversorgung GmbH Unser Strom.standard, Kosten: 1.828,72 Euro </p>
      <p><strong>Einsparung: 907,88 Euro</strong> <p>
      <p>(Stand: 16.02.2026) </p> `;

  activeInfo: 'discountinfo' | null = null;

  selectedPersons = 2;
  consumption = 2510;

  showCustomInput = false;

  customPersons: number | null = null;

  baseConsumptions: Record<number, number> = {
    1: 1600,
    2: 2510,
    3: 3500
  };

  extraPerPerson = 850;

  selectPersons(persons: number) {
    if (persons === 999) {   // mehr button trigger
      this.showCustomInput = true;
      return;
    }

    this.showCustomInput = false;
    this.selectedPersons = persons;
    this.consumption = this.calculateConsumption(persons);
  }

  selectMehr() {
    this.showCustomInput = true;
    this.consumption = 0;
    this.selectedPersons = 0;
  }

  onCustomPersonsChange(value: string) {
    const persons = Number(value);

    if (!persons || persons < 1) {
      this.consumption = 0;
      return;
    }

    this.customPersons = persons;
    this.selectedPersons = persons;
    this.consumption = this.calculateConsumption(persons);
  }

  calculateConsumption(persons: number): number {
    if (persons <= 3) {
      return this.baseConsumptions[persons];
    }

    const base = this.baseConsumptions[3];
    return base + ((persons - 3) * this.extraPerPerson);
  }

  closeCustomInput() {
  this.showCustomInput = false;

  this.selectedPersons = 2;
  this.consumption = this.calculateConsumption(this.selectedPersons);
  this.customPersons = null;
}

currentDialogText = '';

openInfo(template: any, text: string) {
  this.currentDialogText = text;
  this.dialog.open(template, { width: '200px', maxWidth: '80vw' });
}

}
