import { Component, OnInit, Input } from '@angular/core';
import {Bookmark} from '../../modelo/bookmark';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styles: []
})
export class BookmarksComponent implements OnInit {
  
  @Input() note:Bookmark;

  constructor() { }

  ngOnInit() {
  }

}
