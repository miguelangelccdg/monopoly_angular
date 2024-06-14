// src/app/square.model.ts
export interface Square {
  id: number;
  name: string;
  coordinates: { x: number; y: number };
  type: SquareType
  cost?: number;
}

export enum SquareType {
  Property = 'Property',
  Tax = 'Tax',
  Corner = 'Corner',
  Chance = 'Chance',
  CommunityChest = 'CommunityChest',
  Go = 'Go',
  Jail = 'Jail',
  FreeParking = 'FreeParking',
  GoToJail = 'GoToJail',
  Utility = 'Utility',
  Railroad = 'Railroad'
}
