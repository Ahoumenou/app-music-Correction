import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subject } from 'rxjs';
import { Album, List, SortAlbumCallback } from 'src/album';
import { environment } from 'src/environments/environment';
// import { ALBUMS, ALBUM_LISTS } from './mock-albumsss';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  subjectAlbum = new Subject<Album>();
  private _albumsUrl: string = environment.albumUrl;
  private _albumsListUrl: string = environment.albumListUrl;
  // private _albums: Album[] = ALBUMS // _conventien private & protected
  // private _albumlists: List[] = ALBUM_LISTS



  // Observable qui notifie aux abonnées la page actuelle 
  sendCurrentNumberPage = new Subject<number>();

  constructor(private http: HttpClient) { }
  /**
   * Fonction de recherche de tous les albums 
   * @returns Retourne la liste de tous les albums
   */
  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(this._albumsUrl).pipe(
      // ordonner les albums par ordre de durée décroissante
      map(albums => {
        return albums.sort(((a: Album, b: Album) => b.duration - a.duration));
      })
    );
  }

  /**
   * 
   * @param id identifiant de l'album à rechercher
   * @returns Retourne l'album correspondant, underfined si 
   */
  getAlbum(id: string): Observable<Album> {
    return this.http.get<Album>(this._albumsUrl + '/' + id)
      .pipe(
        map((album: Album) => album)
      );
    // return this._albums.find(album => album.id === id)
  }

  /**
   * Fonction de recherche des sond d'un d'un albums 
   * @param id identifiant de l'album à rechercher
   * @returns la référence sera retourné si elle existe; underfined si l'id n'existe pas 
   * dans la liste.
   */
  getAlbumList(id: string):  Observable<List> {
    return this.http.get<List>(this._albumsListUrl + '/' + id)
    // return this._albumlists.find(List => List.id === id)
  }

  /**
   * Fonction qui retourne le nombre d'album
   * @returns retourne le nombre d'albums
   */
  count(): Observable<number> {
    return this.http.get<Album[]>(this._albumsUrl).pipe(
      map((albums: Album[]) => albums.length)
    );
    // return this._albums.length
  }

  order(callback: SortAlbumCallback): Observable< AlbumService> {

    return this.http.get<AlbumService>(this._albumsUrl).pipe(
      // map((albums) =>albums.sort(a, b) => a.duration - b.duration)
    )
    //  this._albums.sort(callback)
    // return this; // retourne le service pour permettre le chaînage de methode 
  }

  // limit(start: number, end: number): AlbumService {
  //   this._albums = this._albums.slice(start, end)
  //   return this;
  // }

  // AlbumService 
  paginate(start: number, end: number): Observable< Album[]> {
    return this.http.get<Album[]>(this._albumsUrl).pipe(
        map((albums) => albums.sort((a, b)=> b.duration - a.duration)
                              .slice(start, end))
    );
    // return this._albums.slice(start, end)
    // .sort((a: Album, b: Album) => b.duration - a.duration)
  }


  /**
   * Type de requête
   * 
   * get => récucpérer une resource 
   * post => envoyer une resource 
   * put => m-à-j une resource
   *  
   */
  search(word: string): Observable<Album[]> {
    return this.http.get<Album[]>(this._albumsUrl).pipe(
      map((albums: Album[]) => {
        // pacourir le tableau d'albums
        return albums.filter(album => {
          // retourner ceux contenant le string de la variable "word"
          return album.title
          .toLowerCase()
          .includes(word.trim().toLowerCase()); // trim() : supprime les espaces avant et après d'un mot
        })
      })
    )
    // return this._albums.filter(album => {
    //   return album.title
    //     .toLowerCase()
    //     .includes(word.trim().toLowerCase())
    // }) // trim() : supprime les espaces avant et après d'un mot
  }

  // searchv2(word: string): Observable<Album[]> {
  //   let re = new RegExp(word.trim(), "g");
  //  return this.http.get<Album[]>(this._albumsUrl).pipe(
  //   map((albums: Album[]) => {
  //     return this._albumsUrl.filter(album =>{})
  //   } )
  //  )
  //   // return this._albums.filter(album => album.title.match(re))
  // }

  /**
   * Methode qui renvoye le nombre d'album qu'on 
   * aura par page
   */
  paginateNumberPage(): number {
    return environment.numberPage;
  }

  /**
   * Méthode qui signale à tous les composant
   * l
   * @param numberPage numéro de la page actuelle 
   */
  currentPage(numberPage: number) {
    return this.sendCurrentNumberPage.next(numberPage)
  }
  /**
   *  Méthode qui permet de changer le status d'un status d'un album à 'on'
   * @param album : L'album dont le status doit passer à "on"
   */
  switchOn(album: Album):void {
    album.status  = 'on'
    // le code ci-dessous s'exécuste car ony souscrit
    this.http.put<void>(this._albumsUrl + '/' + album.id, album)
    .subscribe({
      next: (e)   => e,
      error: (err) => console.warn(err),
      complete: ()  => this.subjectAlbum.next(album)
      
    })
    // put('localhost:3000/albums/1)
    

    // parcourrir outs les albums
    // this._albums.forEach(a => {
    //   // S'il l'album actuel est celui qu'on joue 
    //   if (a.id === album.id) {
    //     a.status = 'on';
    //     album.status = 'on';
    //     // mettre le status à 3    
    //   } else {
    //     // si non mettre le status à "off"
    //     a.status = 'off';
    //   }
    // })
    // // Envoyer une notification à tous les abonnées
    // this.subjectAlbum.next(album);
  }
  /**
   *  Méthode qui permet de changer le status d'un status d'un album à 'off'
   * @param album  : L'album dont le status doit passer à "off"
   */
  switchOff(album: Album) {
  album.status = 'off'
  /**
   * renvoi un observable, est ne s'execute
   * donc qu'à la souscription . Du coup, 
   * il faut il souscrire , pour l'exécuter
   */
  this.http.put<void>(`'${this._albumsUrl}' + '/' + ${album.status}`, album)
              .subscribe(()=>{});
  }



}
