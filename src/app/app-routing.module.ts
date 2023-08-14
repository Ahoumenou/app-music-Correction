import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { LoginComponent } from './login/login.component';
import { AlbumDescriptionComponent } from './album-description/album-description.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { template } from 'lodash';
import { FormTemplateComponent } from './form-template/form-template.component';
import { FormRelatifComponent } from './form-reactif/form-relatif.component';
// import { AlbumComponent } from './admin/album/album.component';

//definition de la constante pour les routes
/**
 * L'ensemble des routes de notre application
 */
const albumsRoutes : Routes = [
  {
    path:'',
    redirectTo: '/albums',
    pathMatch: 'full' 
  },
  {
    path: 'albums',
    component: AlbumsComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'album/:id', 
    component: AlbumDescriptionComponent
  },

  // {
  //   path: 'admin',
  //   component: AlbumComponent
  // },

  { path: 'template', component:FormTemplateComponent},
  { path: 'reactif', component:FormRelatifComponent},

  
  /** ATTENTION DANGER */
  {
    path:'**', 
    component: PageNotFoundComponent
  },

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
        /**
     * forRoot: méthode utilisée pour définir les routes à
     * utilisé dans le module de routage
     */
        RouterModule.forRoot(albumsRoutes), // chargement des routes dans l'application
        
      ],
      exports : [ RouterModule ]
})
export class AppRoutingModule { }
