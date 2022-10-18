export interface Prestamos{////acceder desde cualquier parte del programa
    id?:number;
    isbn:number;////? es opcional
    usuario:string;
    fechaPrestamo:string;
    fechaDevolucion:string;
}