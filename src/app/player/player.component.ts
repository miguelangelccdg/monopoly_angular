import { Component } from '@angular/core';
import { Player } from '../player.model';
import { BoardService } from '../board.service';
import { EventService } from '../event.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent {
  players: Player[] = [];

  constructor(
    private boardService: BoardService,
    private eventService: EventService
  ) {}

  addPlayer(playerNameInput: HTMLInputElement) {
    const playerName = playerNameInput.value.trim();
    if (playerName) {
      const newPlayer: Player = {
        name: playerName,
        money: 1500, // Ejemplo: dinero inicial
        properties: [], // Ejemplo: propiedades iniciales
        color: this.generateRandomColor(),
        position: 0,
        coordinates: { x: 0, y: 0 }
      };
      this.players.push(newPlayer);
      playerNameInput.value = ''; // Limpiar input después de añadir jugador
    }
  }

  startGame() {
    this.players.forEach(player => {
      const initialSquare = this.boardService.getInitialSquare();
      if (initialSquare) {
        player.position = initialSquare.id;
        player.coordinates = initialSquare.coordinates;
      }
    });
  }

  onRollDice(diceResult: number[]) {
    const activePlayer = this.players[0]; // Ejemplo: seleccionar primer jugador como activo
    const totalDiceResult = diceResult.reduce((acc, val) => acc + val, 0);
    this.movePlayer(activePlayer, totalDiceResult);
  }

  private movePlayer(player: Player, steps: number) {
    // Lógica para mover jugador según los pasos dados
    // Ajustar según la lógica de tu juego y estructura del tablero
  }

  private generateRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}
