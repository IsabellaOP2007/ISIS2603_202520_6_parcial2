import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Album } from '../../models/album';

@Component({
  selector: 'app-albumes',
  templateUrl: './albumes.component.html',
  styleUrls: ['./albumes.component.css']
})
export class AlbumesComponent {
  @Input() albumes: Album[] = [];
  @Output() openTracks = new EventEmitter<number>();
  @Output() loveAlbum = new EventEmitter<number>();

  abrir(id: number) {
    this.openTracks.emit(id);
  }

  amar(id: number) {
    this.loveAlbum.emit(id);
  }
}
