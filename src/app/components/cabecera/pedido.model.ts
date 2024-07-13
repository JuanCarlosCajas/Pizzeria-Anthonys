export interface Pedido {
    id: number;
    items: any[]; // Puedes definir una interfaz para los ítems si es necesario
    total: number; // Un campo adicional para el total del pedido
}
