import { Component, OnInit } from '@angular/core';
import { PrestamosService } from 'src/app/services/prestamos.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavbarComponent implements OnInit {

  activeMenu = false;
  counter = 0;

  constructor(
    private prestamoservice: PrestamosService
  ) { }

  ngOnInit(): void {
    /*
    this.storeService.myCart$.subscribe(products => {
      this.counter = products.length;
    });
    */
  }

  toggleMenu() {
    this.activeMenu = !this.activeMenu;
  }

}