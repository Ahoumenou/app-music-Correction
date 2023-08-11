import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Album } from 'src/album';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-paginate',
  templateUrl: './paginate.component.html',
  styleUrls: ['./paginate.component.css']
})
export class PaginateComponent implements OnInit {
  /**tableau réunissant le label de chaque page  */
  pages: number[] = [];

  /** Emetteur d'evènement */
  @Output() setPaginate: EventEmitter<{ start: number, end: number }> = new EventEmitter()

  /** variable qui stocke la page actuelle */
  currentPage: number = 1; // par défaut = 1

  constructor(
    private albumService: AlbumService
  ) {
    this.perPage = this.albumService.paginateNumberPage();
  }

  /**
   * nombre total d'albums
*/
  total: number = 0;

  /**
   * nombre d'album par page (stocké dans les variable d'environment)
   */

  perPage: number;

  /**
   * nombre de boutons à générer 
  */
  numberPage: number = 0;
  ngOnInit(): void {

    this.albumService.count().subscribe(num => {
      this.total = num
      this.numberPage = Math.ceil(this.total / this.perPage);
  
      for (let i = 1; i <= this.numberPage; i++) {
        this.pages.push(i);
      }
    });
  }

  previous() {
    // si nous avons déjà atteint la dernière page de pagination
    if (this.currentPage > 1 ) {
      this.currentPage-- // décrémenter
    } 
    // Demander au parent d'afficher les albums dans la liste
    this.setPaginate.emit(this.setAlbums(this.currentPage))

  }

  next() {
    // si nous avons déjà atteint la dernière page de pagination
    if (this.currentPage >= this.numberPage) {
      this.currentPage = 1  // revenir à la 1ère page
    } else { // sinon
      this.currentPage++ // incrémenter
    }
    // Demander au parent d'afficher les albums dans la liste
    this.setPaginate.emit(this.setAlbums(this.currentPage))
    
  }
  
  /**
   * Fonction qui retourne un sous ensemble d'albums à afficher
 * @param page page courrante
 * @returns un sous ensemble du tableau en fonction de la page courrante
 */
  setAlbums(page: number): {start: number, end : number}{
    let start  = (page - 1) * this.perPage;;
    let end    =  start + this.perPage;

    return { start, end} // return { start: start, end: end}

  }

  changePage(page:number){
    this.currentPage = page;
    // Demander au parent d'afficher les albums suivants dans la liste
    this.setPaginate.emit(this.setAlbums(this.currentPage));
  }

}
