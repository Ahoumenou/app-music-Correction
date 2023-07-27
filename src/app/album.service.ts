import { Injectable } from '@angular/core';
import { Album, List, SortAlbumCallback } from 'src/album';
import { ALBUMS, ALBUM_LISTS } from './mock-albums';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private _albums: Album[] = ALBUMS // _conventien private & protected
  private _albumlists: List[] = ALBUM_LISTS

  constructor() { }
  /**
   * Fonction de recherche de tous les albums 
   * @returns Retourne la liste de tous les albums
   */
  getAlbums(): Album[] {
    return this._albums

  }

  /**
   * 
   * @param id identifiant de l'album à rechercher
   * @returns Retourne l'album correspondant, underfined si 
   */
  getAlbum(id: string | null): Album | undefined {
    return this._albums.find(album => album.id === id)
  }

  /**
   * Fonction de recherche des sond d'un d'un albums 
   * @param id identifiant de l'album à rechercher
   * @returns la référence sera retourné si elle existe; underfined si l'id n'existe pas 
   * dans la liste.
   */
  getAlbumList(id: string): List | undefined {
    return this._albumlists.find(List => List.id === id)
  }

  /**
   * Fonction qui retourne le nombre d'album
   * @returns retourne le nombre d'albums
   */
  count() {
    return this._albums.length
  }

  order(callback: SortAlbumCallback): AlbumService {
    this._albums.sort(callback)
    return this; // retourne le service pour permettre le chaînage de methode 
  }

  limit(start: number, end: number): AlbumService {
    this._albums = this._albums.slice(start, end)
    return this;
  }

  // AlbumService 
  paginate(start: number, end: number): Album[] {
    return this._albums.slice(start, end)
      .sort((a: Album, b: Album) => b.duration - a.duration)
  }

  search(word: string): Album[] {
    return this._albums.filter(album => {
      return album.title
        .toLowerCase()
        .includes(word.trim().toLowerCase())
    }) // time() : supprime les espaces avant et après d'un mot
  }

  searchv2(word: string): Album[] {
    let re = new RegExp(word.trim(), "g");
    return this._albums.filter(album => album.title.match(re))
  }

}
