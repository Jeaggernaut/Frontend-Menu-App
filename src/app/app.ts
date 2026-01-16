import { Component, inject, signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
//import { RouterOutlet } from '@angular/router';
//import { MateriaLista } from './materia-lista/materia-lista';

@Component({
  selector: 'app-root',
  //imports: [RouterOutlet],
  templateUrl: './app.html',
  //styleUrl: './app.css',
  imports: [RouterModule, CommonModule]
})
export class App {
  protected readonly title = signal('menu-app');
  protected router = inject(Router);
}
