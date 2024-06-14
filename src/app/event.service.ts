import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  rollEvent: EventEmitter<number[]> = new EventEmitter<number[]>();

  emitRollEvent(diceResult: number[]) {
    this.rollEvent.emit(diceResult);
  }
}
