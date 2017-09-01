import { Component, OnInit } from '@angular/core';

//Importar el modelo de datos
import {Bookmark} from  '../modelo/bookmark';

//Importar Servicio que provee las notas 
import {NotesService} from '../services/notes.service';

@Component({
  selector: 'app-bookmarks-list',
  templateUrl: './bookmarks-list.component.html',
  styleUrls: ['./bookmarks-list.component.css'],
  providers: [NotesService]
})
export class BookmarksListComponent implements OnInit {

  notes:Bookmark[] = [];


  constructor(private NoteService:NotesService) { }

  getNotes(): void {
    this.NoteService.getNotas().then(notes => this.notes = notes);
  }

  ngOnInit() {
    this.getNotes();
  }

}
