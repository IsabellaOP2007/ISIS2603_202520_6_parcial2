import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Cancion } from '../../models/cancion';

@Component({
  selector: 'app-cancion',
  templateUrl: './cancion.component.html',
  styleUrls: ['./cancion.component.css']
})
export class CancionComponent {
  @Input() cancion!: Cancion;
  @Output() love = new EventEmitter<number>();

  amar() {
    this.love.emit(this.cancion.id);
  }
}
