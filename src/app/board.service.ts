import { Injectable } from '@angular/core';
import { Square } from './square.model'; // Asume que tienes un modelo Square

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  private squares: Square[] = [
    { id: 1, name: 'Go', coordinates: { x: 0, y: 0 }, type: 'corner' },
    // Define todas las casillas del tablero aquí
  ];

  constructor() {}

  getSquares(): Square[] {
    return this.squares;
  }

  getInitialSquare(): Square | undefined {
    // Implementa la lógica para obtener la casilla inicial del tablero
    return this.squares.find(square => square.name === 'Go'); // Ejemplo: encontrar la casilla 'Go' como la inicial
  }
}
