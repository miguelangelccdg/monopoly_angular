// player.model.ts
export interface Player {
  name: string;
  money: number;
  properties: string[]; // Suponiendo que las propiedades son strings por ejemplo
  color: string; // Aquí defines la propiedad color
  position: number; // Posición del jugador en el tablero
  coordinates: { x: number; y: number }; // Coordenadas del jugador
}
