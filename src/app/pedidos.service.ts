import { Injectable } from '@angular/core';
import { Pedido } from './components/cabecera/pedido.model'; // Ajusta la ruta según la ubicación real de tu archivo

@Injectable({
    providedIn: 'root'
})
export class PedidosService {
    private pedidos: Pedido[] = []; // Array para almacenar pedidos
    private nextId = 1; // Identificador único para los pedidos

    constructor() {
        this.cargarDeLocalStorage();
    }

    // Método para agregar un nuevo pedido
    agregarPedido(pedido: Pedido) {
        pedido.id = this.nextId++;
        this.pedidos.push(pedido);
        this.guardarEnLocalStorage();
    }

    // Método para obtener la lista de pedidos
    obtenerPedidos(): Pedido[] {
        return this.pedidos;
    }

    // Método para limpiar todos los pedidos
    limpiarPedidos() {
        this.pedidos = [];
        this.nextId = 1; // Reiniciar el ID
        this.guardarEnLocalStorage();
    }

    // Métodos para persistencia en localStorage
    private guardarEnLocalStorage() {
        localStorage.setItem('pedidos', JSON.stringify(this.pedidos));
    }

    private cargarDeLocalStorage() {
        const data = localStorage.getItem('pedidos');
        if (data) {
            this.pedidos = JSON.parse(data);
            if (this.pedidos.length > 0) {
                this.nextId = Math.max(...this.pedidos.map(pedido => pedido.id)) + 1;
            }
        }
    }
}
