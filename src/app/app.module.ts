import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BookmarkComponent } from './modelo/bookmark/bookmark.component';
import { BookmarksListComponent } from './bookmarks-list/bookmarks-list.component';
import { BookmarksComponent } from './bookmarks-list/bookmarks/bookmarks.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BookmarkComponent,
    BookmarksListComponent,
    BookmarksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
