import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  valorPago: number = 0;
  precoProduto: number = 0;
  ex1resultado: number | null = null;

  calcularTroco(): number {
    return this.valorPago - this.precoProduto;
  }

  precoQuilo = 0;
  quantidadedeQuilos = 0;

  calcularValorFinal(): number {
    return this.precoQuilo * this.quantidadedeQuilos;
  }
}
