export interface Player {
  name: string;
  money: number;
  properties: string[];
  color: string;
  position: number;
  coordinates: { x: number; y: number };
}
