import { Component } from '@angular/core';
import { Tarea } from 'src/app/models/tarea';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent {
  listaTarea:Tarea[]=[];
  nombreTarea:string="";
  tareaActual?:Tarea;
  indiceActual:number=0;

  constructor(private storage:StorageService){
    this.listaTarea = storage.getData();
  }

  agregarTarea(){
    if(this.nombreTarea){
    let estadoActual:boolean = (this.tareaActual)?this.tareaActual["_estado"]:false;
    const tarea:Tarea = new Tarea(this.nombreTarea,estadoActual);
    if(!this.tareaActual)this.storage.saveData(this.listaTarea,tarea);
    else{
    this.listaTarea[this.indiceActual]=tarea;
    //this.listaTarea.push(tarea);
    this.storage.saveData(this.listaTarea);
    }
    this.listaTarea=this.storage.getData();
    this.reiniciarValores();
    }
  }

  eliminarTarea(index:number){
    this.listaTarea.splice(index,1);
    this.storage.saveData(this.listaTarea);
  }

  modificarTarea(index:number){
    this.listaTarea[index]["_estado"] = !this.listaTarea[index]["_estado"];
    this.storage.saveData(this.listaTarea);
  }

  editarTarea(index:number){
    this.nombreTarea = this.listaTarea[index]["_nombre"];
    this.indiceActual = index;
    this.tareaActual = new Tarea(this.nombreTarea,this.listaTarea[index]["_estado"]);
  }

  reiniciarValores(){
    this.indiceActual=0;
    this.nombreTarea="";
    this.tareaActual=undefined;
  } 
  
}
