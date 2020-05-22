import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  gameTiming;
  gameCounter = 0;
  isCounting = true;

  @Output('tick') counterEvent = new EventEmitter<{ counter: { count: number }}>()

  constructor() { }

  ngOnInit(): void {
    this.gameTiming = setInterval(this.tick, 1000);
  }
  
  tick = () => {
    this.gameCounter += 1;
    this.counterEvent.emit({counter: { count: this.gameCounter}})
  }
  
  stopButtonClicked = () => {
    if (this.isCounting) {
      clearInterval(this.gameTiming);
      this.isCounting = false;
    }
  }

  startButtonClicked = () => {
    if (!this.isCounting) {
      this.gameTiming = setInterval(this.tick, 1000);
      this.isCounting = true;
    }
  }
}
