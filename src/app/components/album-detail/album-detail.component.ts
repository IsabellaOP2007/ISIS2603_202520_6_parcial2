import { Component, Input } from '@angular/core';
import { Album } from '../../models/album';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent {
  @Input() album?: Album;
}
