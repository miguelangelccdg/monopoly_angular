import { Injectable } from '@angular/core';
import { Square, SquareType } from './square.model';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  private squares: Square[] = [
    { id: 0, name: 'Go', coordinates: { x: 860, y: 860 }, type: SquareType.Go },
    { id: 1, name: 'Mediterranean Avenue', coordinates: { x: 780, y: 860 }, type: SquareType.Property },
    { id: 2, name: 'Community Chest', coordinates: { x: 700, y: 860 }, type: SquareType.CommunityChest },
    { id: 3, name: 'Baltic Avenue', coordinates: { x: 620, y: 860 }, type: SquareType.Property },
    { id: 4, name: 'Income Tax', coordinates: { x: 540, y: 860 }, type: SquareType.Tax },
    { id: 5, name: 'Reading Railroad', coordinates: { x: 460, y: 860 }, type: SquareType.Railroad },
    { id: 6, name: 'Oriental Avenue', coordinates: { x: 380, y: 860 }, type: SquareType.Property },
    { id: 7, name: 'Chance', coordinates: { x: 300, y: 860 }, type: SquareType.Chance },
    { id: 8, name: 'Vermont Avenue', coordinates: { x: 220, y: 860 }, type: SquareType.Property },
    { id: 9, name: 'Connecticut Avenue', coordinates: { x: 140, y: 860 }, type: SquareType.Property },
    { id: 10, name: 'Jail', coordinates: { x: 60, y: 860 }, type: SquareType.Corner },
    { id: 11, name: 'St. Charles Place', coordinates: { x: 60, y: 780 }, type: SquareType.Property },
    { id: 12, name: 'Electric Company', coordinates: { x: 60, y: 700 }, type: SquareType.Utility },
    { id: 13, name: 'States Avenue', coordinates: { x: 60, y: 620 }, type: SquareType.Property },
    { id: 14, name: 'Virginia Avenue', coordinates: { x: 60, y: 540 }, type: SquareType.Property },
    { id: 15, name: 'Pennsylvania Railroad', coordinates: { x: 60, y: 460 }, type: SquareType.Railroad },
    { id: 16, name: 'St. James Place', coordinates: { x: 60, y: 380 }, type: SquareType.Property },
    { id: 17, name: 'Community Chest', coordinates: { x: 60, y: 300 }, type: SquareType.CommunityChest },
    { id: 18, name: 'Tennessee Avenue', coordinates: { x: 60, y: 220 }, type: SquareType.Property },
    { id: 19, name: 'New York Avenue', coordinates: { x: 60, y: 140 }, type: SquareType.Property },
    { id: 20, name: 'Free Parking', coordinates: { x: 60, y: 60 }, type: SquareType.Corner },
    { id: 21, name: 'Kentucky Avenue', coordinates: { x: 140, y: 60 }, type: SquareType.Property },
    { id: 22, name: 'Chance', coordinates: { x: 220, y: 60 }, type: SquareType.Chance },
    { id: 23, name: 'Indiana Avenue', coordinates: { x: 300, y: 60 }, type: SquareType.Property },
    { id: 24, name: 'Illinois Avenue', coordinates: { x: 380, y: 60 }, type: SquareType.Property },
    { id: 25, name: 'B & O Railroad', coordinates: { x: 460, y: 60 }, type: SquareType.Railroad },
    { id: 26, name: 'Atlantic Avenue', coordinates: { x: 540, y: 60 }, type: SquareType.Property },
    { id: 27, name: 'Ventnor Avenue', coordinates: { x: 620, y: 60 }, type: SquareType.Property },
    { id: 28, name: 'Water Works', coordinates: { x: 700, y: 60 }, type: SquareType.Utility },
    { id: 29, name: 'Marvin Gardens', coordinates: { x: 780, y: 60 }, type: SquareType.Property },
    { id: 30, name: 'Go To Jail', coordinates: { x: 860, y: 60 }, type: SquareType.GoToJail },
    { id: 31, name: 'Pacific Avenue', coordinates: { x: 860, y: 140 }, type: SquareType.Property },
    { id: 32, name: 'North Carolina Avenue', coordinates: { x: 860, y: 220 }, type: SquareType.Property },
    { id: 33, name: 'Community Chest', coordinates: { x: 860, y: 300 }, type: SquareType.CommunityChest },
    { id: 34, name: 'Pennsylvania Avenue', coordinates: { x: 860, y: 380 }, type: SquareType.Property },
    { id: 35, name: 'Short Line Railroad', coordinates: { x: 860, y: 460 }, type: SquareType.Railroad },
    { id: 36, name: 'Chance', coordinates: { x: 860, y: 540 }, type: SquareType.Chance },
    { id: 37, name: 'Park Place', coordinates: { x: 860, y: 620 }, type: SquareType.Property },
    { id: 38, name: 'Luxury Tax', coordinates: { x: 860, y: 700 }, type: SquareType.Tax },
    { id: 39, name: 'Boardwalk', coordinates: { x: 860, y: 780 }, type: SquareType.Property },
  ];

  constructor() {}

  getSquares(): Square[] {
    return this.squares;
  }

  getSquare(id: number): Square | undefined {
    return this.squares.find(square => square.id === id);
  }

  getSquareByName(name: string): Square | undefined {
    return this.squares.find(square => square.name === name);
  }

  getTotalSquares(): number {
    return this.squares.length;
  }

  getInitialSquare(): Square | undefined {
    return this.getSquareByName('Go');
  }

  getSquareCoordinates(squareId: number): { x: number, y: number } | undefined {
    const square = this.getSquare(squareId);
    return square ? square.coordinates : undefined;
  }
}
