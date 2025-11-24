import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancionAlbumComponent } from './cancion-album.component';

describe('CancionAlbumComponent', () => {
  let component: CancionAlbumComponent;
  let fixture: ComponentFixture<CancionAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CancionAlbumComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CancionAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
