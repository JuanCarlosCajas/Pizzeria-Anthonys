export interface IPedidos {
    id_pedido?: number;
    id_usuario?: number;
    id_metodo?: number;
    fecha_pedido?: Date;
    total?: number;
    direccion?: string;
    estado?: string;
}
