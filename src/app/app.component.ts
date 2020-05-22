import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  count: number = 0;
  gameComponents: number[] = [];

  tick({ counter }) {
    const { count } = counter;
    this.gameComponents.push(count);
  }
}
