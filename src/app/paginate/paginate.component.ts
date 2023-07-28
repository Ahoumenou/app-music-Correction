import { Component, OnInit } from '@angular/core';
import { Album } from 'src/album';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-paginate',
  templateUrl: './paginate.component.html',
  styleUrls: ['./paginate.component.css']
})
export class PaginateComponent implements OnInit {
  /**tableau réunissant le label de chaque page  */
  pages:number[]= [];

  constructor(
    private albumService : AlbumService
  ){
    this.perPage = this.albumService.paginateNumberPage();

  }
    /**
     * nombre total d'albums
 */
  total: number = 10;

  /**
   * nombre d'album par page (stocké dans les variable d'environment)
   */
  
  perPage: number;
  
  /**
   * nombre de boutons à générer 
  */
 numberPage: number= 0;
ngOnInit(): void {
  this.total = this.albumService.count();
  this.numberPage = Math.ceil(this.total / this.perPage);
  for (let i = 1; i <= this.numberPage ; i++) {
    this.pages.push(i)
  }
}
}
