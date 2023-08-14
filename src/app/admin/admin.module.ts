import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumComponent } from './album/album.component';
import { ShareModule } from '../share/share.module';
import { AddAlbumComponent } from './add-album/add-album.component';
import { RouterModule, Routes } from '@angular/router';

// Dans l'AdminModule définition des routes
const routes: Routes = [
  {
    path: 'admin',
    component: AlbumComponent
  },
  {
    path: 'admin/add',
    component: AddAlbumComponent
  },

]


@NgModule({
  declarations: [
    AlbumComponent,
    AddAlbumComponent
  ],

  imports: [
    CommonModule,
    ShareModule,
    RouterModule.forChild(routes)
  ],

  exports: [AlbumComponent]
})
export class AdminModule { }
