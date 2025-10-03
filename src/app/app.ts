import { Component, signal } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { MateriaLista } from './materia-lista/materia-lista';

@Component({
  selector: 'app-root',
  //imports: [RouterOutlet],
  templateUrl: './app.html',
  //styleUrl: './app.css',
  imports: [MateriaLista]
})
export class App {
  protected readonly title = signal('menu-app');
}
