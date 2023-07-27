import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from 'src/album';
import { AlbumService } from '../album.service';
import { fadeInAnimation } from '../animation.module';

@Component({
  selector: 'app-album-description',
  templateUrl: './album-description.component.html',
  styleUrls: ['./album-description.component.css'],
  animations: [fadeInAnimation]
})
export class AlbumDescriptionComponent implements OnInit{
album: Album | undefined;
constructor(
  private route : ActivatedRoute,
  private albumService: AlbumService // service
  ){}
 

ngOnInit(): void{
  // permet de recuperer l'identifiant 
  const id = this.route.snapshot.paramMap.get('id')
  console.log(id );
  
  // TODO récuperer le détail d'un album
  this.album = this.albumService.getAlbum(id)
  console.log(this.album);
  
}
}
