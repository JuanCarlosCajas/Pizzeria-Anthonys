import { Component, OnInit } from '@angular/core';
import { PedidosService } from '../pedidos.service'; 
import { Pedido } from '../components/cabecera/pedido.model';  // Ajusta la ruta según tu estructura de proyecto

@Component({
  selector: 'app-pedidoss',
  templateUrl: './pedidoss.component.html',
  styleUrls: ['./pedidoss.component.css']
})
export class PedidossComponent implements OnInit {
  pedidos: Pedido[] = [];

  constructor(private pedidosService: PedidosService) {}

  ngOnInit(): void {
    this.pedidos = this.pedidosService.obtenerPedidos();
  }
  limpiarPedidos(): void {
    this.pedidosService.limpiarPedidos();
    this.pedidos = [];
  }
}
