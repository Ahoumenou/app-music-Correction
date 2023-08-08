import { Component, OnInit } from '@angular/core';

// Importez la définition de la classe et les albums
import { Album, List } from 'src/album';
import { AlbumService } from '../album.service';
import { fadeInAnimation } from '../animation.module';
import { ALBUMS, ALBUM_LISTS } from '../mock-albumsss';



@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
  animations: [fadeInAnimation] 
})

export class AlbumsComponent implements OnInit {
  
  titlePage: string = "Page princiaple Albums Music";
  title:string = "app-music";
  // albums: Album[] = ALBUMS;
  albums!: Album[] | undefined
  album_list: List[] = ALBUM_LISTS;
  selectedAlbum!:Album; // je suis sùr qu'une valeur qui sera passée au moment opportun
  selectedList! :string[] | undefined;
  status:string | null = null;

  

   constructor(
    private albumService: AlbumService
   ){
    // 
    console.log(`${this.albumService.count()} albums trouvés`);
   };

   ngOnInit(): void{
    //  this.albums = this.albumService.getAlbums()
      this.albumService
      .paginate(0, this.albumService.paginateNumberPage())
      .subscribe({
        next: (alb: Album[]) =>{
             this.albums = alb
        }
      }
      )
                            // .order(function(a:Album, b:Album){
                            //   return a.duration - b.duration
                            // }) // ordonne les albums
                            // .limit(0, this.albumService.count()) // renvoie une sous partie
                            // .getAlbums()// recupère les albums
   }

   onSelect(album: Album){
    this.selectedAlbum = album;
    console.log(this.selectedAlbum);
  
  };

  playParent($event:Album){
    this.status = $event.id;
    console.log(typeof $event);
  }
  search($event: Album[]){
   console.log(`Parent sera mis à jour et affichera seulement les albums ${$event}`);
   if ($event){
    this.albums = $event
   }

  }

  onSetPaginate($event:{ start: number, end:number}){
  this.albumService.paginate($event.start, $event.end)
  .subscribe({
    next: (alb : Album[]) => this.albums = alb
  })

  }
};


