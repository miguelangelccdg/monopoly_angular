import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.scss']
})
export class DiceComponent {
  @Output() rollEvent = new EventEmitter<number[]>(); // Evento para emitir resultados de los dados

  constructor() {}

  rollDice() {
    const dice1 = Math.ceil(Math.random() * 6);
    const dice2 = Math.ceil(Math.random() * 6);
    const diceResult: number[] = [dice1, dice2]; // Utilizamos los valores generados de los dados

    this.rollEvent.emit(diceResult); // Emitir el evento con los resultados de los dados
  }

  getDice(diceNumber: number): number {
    // Lógica para obtener el valor del dado especificado (1 o 2)
    return Math.ceil(Math.random() * 6); // Retornar un valor aleatorio entre 1 y 6
  }
}
