import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
   standalone: true,
  imports: [MatToolbarModule, CommonModule, RouterModule]
})
export class NavbarComponent {
  menuItems = [
    { label: 'Rebuttal', route: '/rebuttal', active: true },
    { label: 'Updates', route: '/updates', active: false },
    { label: 'Information Mismatch', route: '/info-mismatch', active: false },
    { label: 'Doubts', route: '/doubts', active: false }
  ];

  setActive(item: any) {
    this.menuItems.forEach(i => i.active = false);
    item.active = true;
  }
}
