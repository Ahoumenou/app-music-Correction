import { Component, OnInit,Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Album, List } from 'src/album';
import { AlbumService } from '../album.service';
import { fadeInAnimation } from '../animation.module';
import { ALBUMS, ALBUM_LISTS } from '../mock-albumsss';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css'],
  animations: [fadeInAnimation]
})
export class AlbumDetailsComponent implements OnInit, OnChanges {

  // Classe Input permet de récupérer les data de l'enfant
  // album est liée à une entrée [album] du parent dans le sélecteur
  @Input() album!: Album; // propriété liée qui sera passée  par le parent
  @Output() onPlay: EventEmitter<Album> = new EventEmitter()
  
  // album_list: List[] = ALBUM_LISTS;
  // albums: Album[] = ALBUMS;
  selectedList! :string[] | undefined ;
  songs: string[] | undefined = [];

  constructor(
    private albumService: AlbumService
  ){}

  // quand il y a de nouveau
  ngOnChanges(): void {
    if (this.album){
    this.albumService.getAlbumList(this.album.id).subscribe(
      (albumList) => { this.songs = albumList.list}
    )
    }
  }

  ngOnInit(): void {
    console.log("Composant initialisé ");
    
  }
  play(album:Album){
    console.log("Play l'album");
    this.onPlay.emit(album);
    this.albumService.switchOn(album);
  }
  
  // shufferAlbum(selectedList: string[]){
  //   console.log("shuffer Album_list");
    
  //    for (let i = 0; i < this.album_list.length; i++) {
     
  //     console.log( this.album_list[i].list.reverse());
      
  //    }
  // }
 
 
}
