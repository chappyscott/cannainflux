import { Component, Input, Output } from '@angular/core';

import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template : `

  <nav class='navbar navbar-expand navbar-light bg-light'>
    <a class='navbar-brand' routerLinkActive='active'
    [routerLink]="['/welcome']"><img [src]='pageLogo' alt="CannaInflux" style="width:150px;height:30px;"></a>
    <ul class='navbar-nav'>
      <li class='nav-item topnav-right'><a class='nav-link' routerLinkActive='active' [routerLinkActiveOptions]="{exact: true}"
      [routerLink]="['/products']">Products</a>
      </li>
    </ul>
  </nav>
  <div class='container'>
    <router-outlet></router-outlet>
  </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cannainflux';
  pageLogo = './assets/canninflux_logo.png'

  // This needs to be moved to the products page or another page
  // @Input() @Output() alertText = '';
  // @Input() @Output() productPrice = '';
  // @Input() @Output() notesArea = '';

  // handleCreatePDF() {
  //   const doc = new jsPDF({
  //     orientation: 'portrait',
  //     unit: 'in',
  //     format: [8.5, 11]
  //   });
  //   doc.text(this.title, 1, 1);
  //   doc.text(this.alertText, 1, 1.5);
  //   doc.text(this.notesArea, 1, 1.75);
  //   doc.text(this.productPrice, 1, 2);
  //   doc.save('example.pdf');
  // }
  // handleAlert() {
  //   alert(this.alertText + ' ' + this.productPrice + ' ' + this.notesArea);
  // }
}
