import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AlbumesComponent } from './components/albumes/albumes.component';
import { AlbumDetailComponent } from './components/album-detail/album-detail.component';
import { CancionAlbumComponent } from './components/cancion-album/cancion-album.component';
import { CancionComponent } from './components/cancion/cancion.component';
import { ArtistaComponent } from './components/artista/artista.component';

@NgModule({
  declarations: [AppComponent, AlbumesComponent, AlbumDetailComponent, CancionAlbumComponent, CancionComponent, ArtistaComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
