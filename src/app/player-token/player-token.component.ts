// player-token.component.ts

import { Component, Input } from '@angular/core';
import { Player } from '../player.model';

@Component({
  selector: 'app-player-token',
  templateUrl: './player-token.component.html',
  styleUrls: ['./player-token.component.scss']
})
export class PlayerTokenComponent {
  @Input() player: Player | undefined;

  constructor() {}
}
