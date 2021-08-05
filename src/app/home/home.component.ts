import { Component, OnInit } from '@angular/core';
import { OfertasServices } from '../ofertas.services';
import { Oferta } from '../shared/oferta.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[OfertasServices]
})
export class HomeComponent implements OnInit {

  public ofertas!: Oferta[]

  constructor(private ofertasServices: OfertasServices) { }

  ngOnInit(): void {
    this.ofertas = this.ofertasServices.getOfertas()
    console.log(this.ofertas[0].imagens[0])
  }
}
