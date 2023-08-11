import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {  BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {  HttpClient, HttpClientModule } from '@angular/common/http'


import { AppComponent } from './app.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { AlbumDescriptionComponent } from './album-description/album-description.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SecondCompComponent } from './second-comp/second-comp.component';
import { FirstCompComponent } from './first-comp/first-comp-compenent';
import { PaginateComponent } from './paginate/paginate.component';
import { AudioPlayerComponent } from './audio-player/audio-player.component';
import { AppRoutingModule } from './app-routing.module';
import { AdminModule } from './admin/admin.module';
import { AlbumComponent } from './admin/album/album.component';
import { ShareModule } from './share/share.module';



@NgModule({
  declarations:[
    AppComponent,
    AlbumsComponent,
    AlbumDetailsComponent,
    SearchComponent,
    LoginComponent,
    AlbumDescriptionComponent,
    PageNotFoundComponent,
    FirstCompComponent,
    SecondCompComponent,
    // PaginateComponent,
    AudioPlayerComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AdminModule,
    AppRoutingModule,
    ShareModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})


export class AppModule { }
