import { NgForm } from '@angular/forms';
import { Component, EventEmitter, Output } from '@angular/core';
import { AlbumService } from '../album.service';
import { Album } from 'src/album';
import { fadeInAnimation } from '../animation.module';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  animations: [fadeInAnimation]
})
export class SearchComponent {
  word:string = '';

  @Output() searchAlbums : EventEmitter<Album[]> = new EventEmitter();
constructor(
  private albumService: AlbumService,
){ }
  onSubmit(  form: NgForm){
  const results = this.albumService.search(form.value.word);
  this.searchAlbums.emit(results)
  }

  onChangeEmit($event: string){
    const results : Album[] = this.albumService.search($event);
    this.searchAlbums.emit(results)
    console.log("word a changé .Nouvelle valeur = ", $event);  
  }
}
