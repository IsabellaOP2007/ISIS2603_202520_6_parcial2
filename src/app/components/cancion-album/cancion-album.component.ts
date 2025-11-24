import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Cancion } from '../../models/cancion';

@Component({
  selector: 'app-cancion-album',
  templateUrl: './cancion-album.component.html',
  styleUrls: ['./cancion-album.component.css']
})
export class CancionAlbumComponent {
  @Input() canciones: Cancion[] = [];
  @Output() loveTrack = new EventEmitter<number>();

  amar(id: number) {
    this.loveTrack.emit(id);
  }
}
