import { Component } from '@angular/core';
import { EventService } from '../event.service'; // Importar el servicio de eventos

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.scss']
})
export class DiceComponent {
  constructor(private eventService: EventService) {}

  rollDice() {
    // Simular lanzamiento de dados y obtener resultados
    const dice1 = Math.ceil(Math.random() * 6);
    const dice2 = Math.ceil(Math.random() * 6);
    const diceResult: number[] = [dice1, dice2];

    // Emitir el evento con los resultados de los dados
    this.eventService.emitRollEvent(diceResult);
  }

  getDice(diceNumber: number): number {
    // Lógica para obtener el valor del dado especificado
    return Math.ceil(Math.random() * 6); // Retorna un número aleatorio entre 1 y 6
  }
}
