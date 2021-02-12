import { Component, Input, Output } from '@angular/core';

import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'cannainflux';
  @Input() @Output() alertText = '';

  handleCreatePDF() {
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'in',
      format: [8.5, 11],
    });
    doc.text(this.title, 1, 1);
    doc.text(this.alertText, 1, 1.5);
    doc.save('example.pdf');
  }
  handleAlert() {
    alert(this.alertText);
  }
}
