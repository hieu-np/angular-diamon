import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  isToggleNav: boolean = false;
  cartCount: number = 10;

  constructor() { }

  ngOnInit(): void {
  }

  changeIconNav() {
    this.isToggleNav = !this.isToggleNav
  }
}
