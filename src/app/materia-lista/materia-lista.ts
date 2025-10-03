import { Component } from '@angular/core';
import { Materia } from '../materia';
import { MateriaService } from '../materia.service';
import { inject } from '@angular/core';

@Component({
  selector: 'app-materia-lista',
  imports: [],
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
          this.materias = datos;
        },
        error: (error) => {
            console.error('Error al obtener la lista de materias:', error);
        }
      }
    );
  }
}
