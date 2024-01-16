import { Injectable } from '@angular/core';
import { Tarea } from '../models/tarea';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  getData():Tarea[]{
    const tareas = localStorage.getItem('tareas');
    return tareas ? JSON.parse(tareas):[];
  }
  saveData(tareas:Tarea[],tarea?:Tarea):void{
    //const tareas = this.getData();
    if(tarea) tareas.push(tarea);
    localStorage.setItem('tareas',JSON.stringify(tareas));
  }
  //saveAllData(){}
  
}
