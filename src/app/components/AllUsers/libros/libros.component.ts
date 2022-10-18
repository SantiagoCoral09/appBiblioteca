import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/interfaces/Libros';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  librosRegistrados: Libro [] =[
    {
      isbn:9789588886183,
      titulo:'Noticia de un secuestro',
      autor:'Gabriel Garcia Marquez',
      editorial:'Delbolsillo',
      fechaPublicacion:'09-02-2014'
    },
    {
      isbn:9788445013700,
      titulo:'Metro 2033',
      autor:'Dmitry Glukhovsky',
      editorial:'Minotauro',
      fechaPublicacion:'09-02-2022'
    },
    {
      isbn:9789587231588,
      titulo:'La riqueza de las naciones',
      autor:'Adam Smith',
      editorial:'Valencia Quintero Jorge Javier',
      fechaPublicacion:'09-02-2022'
    },

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
