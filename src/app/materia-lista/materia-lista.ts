import { Component } from '@angular/core';
import { Materia } from '../materia';
import { MateriaService } from '../materia.service';
import { inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-materia-lista',
  imports: [CommonModule],
  templateUrl: './materia-lista.html'
  //styleUrl: './materia-lista.css'
})
export class MateriaLista {
  materias!: Materia[];

  private MateriaServicio = inject(MateriaService);

  ngOnInit() {
    this.obtenerMaterias();
  }

  private obtenerMaterias(): void {
    this.MateriaServicio.obtenerMateriasLista().subscribe(
      {
        next: (datos) => {
          console.log('Materias obtenidas:', datos);
          this.materias = datos;
        },
        error: (error) => {
            console.error('Error al obtener la lista de materias:', error);
        }
      }
    );
  }
}
