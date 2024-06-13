// event.service.ts

import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  rollEvent: EventEmitter<number[]> = new EventEmitter<number[]>();

  constructor() {}

  emitRollEvent(diceResult: number[]) {
    this.rollEvent.emit(diceResult);
  }
}
