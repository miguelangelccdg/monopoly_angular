// square.model.ts

export interface Square {
    id: number;
    name: string;
    coordinates: { x: number, y: number };
    type: string; // Puedes ajustar el tipo según las necesidades de tu juego (esquina, propiedad, etc.)
  }
  