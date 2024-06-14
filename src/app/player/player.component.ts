import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Player } from '../player.model';
import { BoardService } from '../board.service';
import { EventService } from '../event.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  @Output() playerSelected = new EventEmitter<Player>();

  players: Player[] = [];
  gameStarted = false;

  playerTokenImage = 'assets/player-token.png'; // Ruta a la imagen de la ficha del jugador

  constructor(
    private boardService: BoardService,
    private eventService: EventService
  ) {}

  ngOnInit() {
    this.eventService.rollEvent.subscribe((diceResult: number[]) => {
      this.onRollDice(diceResult);
    });
  }

  addPlayer(playerNameInput: HTMLInputElement) {
    const playerName = playerNameInput.value.trim();
    if (playerName) {
      const newPlayer: Player = {
        name: playerName,
        money: 1500,
        properties: [],
        color: this.generateRandomColor(),
        position: 0,
        coordinates: { x: 0, y: 0 }
      };
      this.players.push(newPlayer);

      // Asignar la casilla inicial y coordenadas del jugador
      const initialSquare = this.boardService.getInitialSquare();
      if (initialSquare) {
        newPlayer.position = initialSquare.id;
        newPlayer.coordinates = initialSquare.coordinates;
      }

      playerNameInput.value = '';
    }
  }

  startGame() {
    this.gameStarted = true;

    // Mover las fichas de los jugadores a la casilla inicial
    this.players.forEach(player => {
      const initialSquare = this.boardService.getInitialSquare();
      if (initialSquare) {
        player.position = initialSquare.id;
        player.coordinates = initialSquare.coordinates;
      }
    });
  }

  onRollDice(diceResult: number[]) {
    console.log('Dice result:', diceResult);
    const activePlayer = this.players[0]; // Suponiendo que el primer jugador es el activo
    const totalDiceResult = diceResult.reduce((acc, val) => acc + val, 0);
    this.movePlayer(activePlayer, totalDiceResult);
  }

  private movePlayer(player: Player, steps: number) {
    // Calcular la nueva posición del jugador
    let newPosition = player.position + steps;

    // Verificar si el jugador ha pasado la última casilla y ajustar la posición
    const totalSquares = this.boardService.getTotalSquares();
    if (newPosition >= totalSquares) {
      newPosition -= totalSquares;
    }

    // Actualizar posición del jugador
    player.position = newPosition;

    // Obtener las coordenadas de la nueva casilla
    const newSquareCoordinates = this.boardService.getSquareCoordinates(player.position);
    if (newSquareCoordinates) {
      player.coordinates = newSquareCoordinates;
    }
  }

  private generateRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // Método para emitir el evento de selección de jugador
  selectPlayer(player: Player) {
    this.playerSelected.emit(player);
  }

  calculateLeftPosition(player: Player): number {
    const boardWidth = 994; // Ancho del tablero en píxeles
    const cellWidth = 80; // Ancho de cada casilla en píxeles
    const playerPosition = player.position; // Posición actual del jugador en el tablero (0-39)
  
    // Calcular la columna y el desplazamiento dentro de la casilla
    const column = playerPosition % 10; // Columna en la cuadrícula (0-9)
    const offset = column * cellWidth; // Desplazamiento dentro de la columna
  
    // Calcular la posición left absoluta en píxeles
    const leftPosition = offset + 125; // Añadir margen izquierdo inicial del tablero
  
    return leftPosition;
  }
  
  calculateTopPosition(player: Player): number {
    const boardHeight = 994; // Alto del tablero en píxeles
    const cellHeight = 80; // Alto de cada casilla en píxeles
    const playerPosition = player.position; // Posición actual del jugador en el tablero (0-39)
  
    // Calcular la fila y el desplazamiento dentro de la casilla
    const row = Math.floor(playerPosition / 10); // Fila en la cuadrícula (0-3)
    const offset = row * cellHeight; // Desplazamiento dentro de la fila
  
    // Calcular la posición top absoluta en píxeles
    const topPosition = boardHeight - offset - 125 - cellHeight; // Restar el margen superior y el alto de la casilla
  
    return topPosition;
  }
}
