import { Component, OnInit } from '@angular/core';
import { ArtistaService } from './services/artista.service';

import { Artista } from './models/artista';
import { Album } from './models/album';
import { Cancion } from './models/cancion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  artistas: Artista[] = [];
  artistaSeleccionado?: Artista;

  albumes: Album[] = [];
  albumSeleccionado?: Album;

  canciones: Cancion[] = [];

  constructor(private artistaService: ArtistaService) {}

  ngOnInit(): void {
    this.cargarArtistas();
  }



  cargarArtistas() {
    this.artistaService.getArtistas().subscribe(data => {
      this.artistas = data;
    });
  }

  onSeleccionarArtista(artista: Artista) {
    this.artistaSeleccionado = artista;
    this.cargarAlbumes(artista.id);
    this.canciones = [];
    this.albumSeleccionado = undefined;
  }

  cargarAlbumes(idArtista: number) {
    this.artistaService.getAlbumes(idArtista).subscribe(data => {
      this.albumes = data;
    });
  }

  onSeleccionarAlbum(idAlbum: number) {
    this.albumSeleccionado = this.albumes.find(a => a.id === idAlbum);
    this.cargarCanciones(idAlbum);
  }

  cargarCanciones(idAlbum: number) {
    this.artistaService.getCanciones(idAlbum).subscribe(data => {
      this.canciones = data;
    });
  }



  onLoveAlbum(idAlbum: number) {
    this.artistaService.loveAlbum(idAlbum).subscribe(() => {
      const album = this.albumes.find(a => a.id === idAlbum);
      if (album) album.favorite = !album.favorite;
    });
  }

  onLoveCancion(idCancion: number) {
    this.artistaService.loveCancion(idCancion).subscribe(() => {
      const track = this.canciones.find(t => t.id === idCancion);
      if (track) track.favorite = !track.favorite;
    });
  }

}
