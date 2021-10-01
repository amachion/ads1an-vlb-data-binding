import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-binding';
  nome = "Andreia";
  idade = 20;

  lancaDado() {
    return Math.floor(Math.random() * 6 + 1);
  }

}
