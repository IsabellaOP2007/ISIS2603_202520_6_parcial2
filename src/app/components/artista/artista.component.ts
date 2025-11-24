import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Artista } from '../../models/artista';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent {
  @Input() artistas: Artista[] = [];
  @Output() selectArtista = new EventEmitter<Artista>();

  seleccionar(artista: Artista) {
    this.selectArtista.emit(artista);
  }
}
