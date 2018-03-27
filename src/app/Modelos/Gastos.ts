import { Entidades } from "./Entidades";
import { TiposMovimiento } from "./TiposMovimiento";

export class Gastos {
    id: number;
    fecha: Date;
    importe: number;
    activo: number;
    // fijo: number;
    entidad: Entidades;
    tipo: TiposMovimiento;

    idEntidad: number;
    idTipoMovimiento: number;

    descripcion: string;    
}