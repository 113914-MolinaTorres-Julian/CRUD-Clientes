import { Component } from '@angular/core';
import { Cliente } from "./models/cliente";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CRUD';

  clientes: Cliente[] = [
    {id: 1, nombre: "Matías", apellido: "Lokman", dni: 12345, numTelefono: 6789},
    {id: 2, nombre: "Gustavo", apellido: "Olivera", dni: 12345, numTelefono: 6789},
    {id: 3, nombre: "Victorio", apellido: "Perez", dni: 12345, numTelefono: 6789}
  ];

  selectedCliente: Cliente = new Cliente();

  agregarCliente() {
    this.selectedCliente.id = this.clientes.length + 1;
    this.clientes.push(this.selectedCliente);

    this.selectedCliente = new Cliente();
  }

  editarCliente() {

  }

  borrarCliente() {
    if(confirm("¿Realmente desea borrar al cliente seleccionado?")) {
      this.clientes = this.clientes.filter(x => x != this.selectedCliente);
      this.selectedCliente = new Cliente();
    }
  }

  llenarCampos(cliente: Cliente) {
    this.selectedCliente = cliente;
  }

}
