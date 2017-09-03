import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BookmarksListComponent } from './bookmarks-list/bookmarks-list.component';
import { BookmarksComponent } from './bookmarks-list/bookmarks/bookmarks.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import {routes} from './app.routes';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,    
    BookmarksListComponent,
    BookmarksComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
