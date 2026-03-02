import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-discount',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatInputModule, CommonModule, MatTooltipModule, MatDialogModule],
  templateUrl: './discount.html',
  styleUrl: './discount.css',
})


export class Discount {

  currentDialogData = {
    text: '',
  };

  currentDialogText = '';

  constructor(public dialog: MatDialog) {}

  ansprechpartner = `<p> SERVICE wird bei uns GROß geschrieben! </p>
    <p>
    Deshalb erhält jeder unserer Kunden einen dauerhaft festen Ansprechpartner.
    Dieser steht Ihnen für alle Fragen Rund um Ihre Verträge jederzeit gerne zur Seite.
    Er unterstützt Sie sowohl beim Anbieterwechsel, als auch bei Zählerstandsmeldungen oder Allgemeinen Fragen.
    Auch werden Sie durch Ihren persönlichen Ansprechpartner rechtzeitig an den nächsten Wechsel erinnert. </p>

    <p>PERSÖNLICH - FAIR - KOMPETENT: </p>
    <p>Im Anschluss Ihrer Eingabe zum Anbieterwechsel, erhalten Sie direkten Kontaktdaten Ihres persönlichen Ansprechpartners
    (wie E-Mail Adresse, Durchwahl und sogar die Handynummer).</p>`;


  wechselerinnerung = `
    <p>Mit unserer automatischen Wechselerinnerung verpassen Sie keine Kündigungsfristen mehr. </p>
    <p> Ihr persönlicher Ansprechpartner erinnert Sie rechtzeitig vor Ablauf Ihrer Mindestvertragslaufzeit über das anstehende Ende der
    Mindestlaufzeit und bereitet für Sie direkt passende Anschlusskonditionen vor. Somit vermeiden Sie Preiserhöhungen und sichern sich wieder die besten Konditionen
    sichern. Sie können sich bequem zurücklegen, denn Ihr dauerhaft persönlicher Ansprechpartner kümmert sich um Alles. </p>
    `;

  openInfo(template: any, text: string) {
    this.currentDialogText = text;
    this.dialog.open(template);
  }

}
