import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from 'src/album';
import { AlbumService } from 'src/app/album.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  albums!: Album[];
  message!: string | undefined;

  constructor(
    private aS: AlbumService,
    private route: ActivatedRoute
  ) { };

  ngOnInit(): void {
    //  this.albums = this.albumService.getAlbums()
    this.aS
      .paginate(0, this.aS.paginateNumberPage())
      .subscribe({
        next: (alb: Album[]) => {
          this.albums = alb
        }
      }
      )
    this.route.queryParams.subscribe(params => {
      this.message = params['message']
      console.log('chaine de requête');
      console.log(params);
      
    })
  }
  // tslint:disable-next-line: typedef (ignore le type des paramtres)
  onSetPaginate($event: { start: number, end: number }) {
    this.aS.paginate($event.start, $event.end)
      .subscribe({
        next: (alb: Album[]) => this.albums = alb
      })

  }
}
