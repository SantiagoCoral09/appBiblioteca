
export interface Libro{////acceder desde cualquier parte del programa
    id?:number;
    isbn:number;////? es opcional
    titulo:string;
    autor:string;
    editorial:string;
    fechaPublicacion:string;
}