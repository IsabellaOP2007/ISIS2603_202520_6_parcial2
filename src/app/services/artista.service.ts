import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Artista } from '../models/artista';
import { Album } from '../models/album';
import { Cancion } from '../models/cancion';

@Injectable({
  providedIn: 'root'
})
export class ArtistaService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getArtistas(): Observable<Artista[]> {
    return this.http.get<Artista[]>(`${this.baseUrl}/artists`);
  }

  getAlbumes(idArtista: number): Observable<Album[]> {
    return this.http.get<Album[]>(`${this.baseUrl}/artists/${idArtista}/albums`);
  }

  getCanciones(idAlbum: number): Observable<Cancion[]> {
    return this.http.get<Cancion[]>(`${this.baseUrl}/albums/${idAlbum}/tracks`);
  }

  loveAlbum(idAlbum: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/loveAlbum?id=${idAlbum}`, {});
  }

  loveCancion(idCancion: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/loveTrack?id=${idCancion}`, {});
  }
}
