export class Tarea {
    private _nombre: string; //por convensión se utilizar guión bajo
    private _estado: boolean;
    /*-----------------------*/
    constructor(nombre:string,estado:boolean){
        this._nombre = nombre;
        this._estado = estado;        
    }
    /*-----------------------*/
    get nombre(): string {
        return this._nombre;
    }
    set nombre(value: string) {
        this._nombre = value;
    }
    /*-----------------------*/    
    get estado(): boolean {
        return this._estado;
    }
    set estado(value: boolean) {
        this._estado = value;
    }
 
}