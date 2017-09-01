import { Injectable } from '@angular/core';
import {Bookmark} from '../modelo/bookmark';

@Injectable()
export class NotesService {

  notas:Bookmark [] = [
    new Bookmark('Nota 1',"Contenido de Nota 1",'1/08/2017'),
    new Bookmark('Nota 2',"Contenido de Nota 2",'2/08/2017'),
    new Bookmark('Nota 3',"Contenido de Nota 3",'3/08/2017'),
    new Bookmark('Nota 4',"Contenido de Nota 4",'4/08/2017'),
    new Bookmark('Nota 5',"Contenido de Nota 5",'5/08/2017'),
    new Bookmark('Nota 6',"Contenido de Nota 6",'6/08/2017'),
    new Bookmark('Nota 7',"Contenido de Nota 7",'7/08/2017'),
  ];

  constructor(){}
 
  getNotas(): Promise<Bookmark[]>{
    return Promise.resolve(this.notas);
  }


}
