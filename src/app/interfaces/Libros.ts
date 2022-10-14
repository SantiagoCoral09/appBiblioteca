export interface Libro{
    id?:number;////acceder desde cualquier parte del programa
    isbn:number;////? es opcional
    titulo:string;
    autor:string;
    editorial:string;
    fechaPublicacion:Date;
}