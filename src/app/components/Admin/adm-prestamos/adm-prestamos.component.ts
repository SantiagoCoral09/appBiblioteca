import { Component, OnInit } from '@angular/core';
import { Prestamos } from 'src/app/interfaces/Prestamos';

@Component({
  selector: 'app-adm-prestamos',
  templateUrl: './adm-prestamos.component.html',
  styleUrls: ['./adm-prestamos.component.css']
})
export class AdmPrestamosComponent implements OnInit {
  pedidosRegistrados: Prestamos[] = [
    {
      isbn: 9789588886183,
      usuario: 'Santiago Coral',
      fechaPrestamo: '06-05-2022',
      fechaDevolucion: '09-06-2022'
    },
    
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
