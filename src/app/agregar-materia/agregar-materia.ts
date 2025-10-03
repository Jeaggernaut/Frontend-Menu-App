import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Materia } from '../materia';
import { MateriaService } from '../materia.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-materia',
  imports: [FormsModule],
  templateUrl: './agregar-materia.html',
  //styleUrl: './agregar-materia.css'
})
export class AgregarMateria {
  materia: Materia = new Materia();

  private materiaServicio = inject(MateriaService);
  private enrutador = inject(Router);

  onSubmit() {
    this.guardarMateria();
  }

  guardarMateria() {
    this.materiaServicio.agregarMateria(this.materia).subscribe({
      next: (datos) => {
         this.irListaMaterias(); 
      },
        error: (error: any) => console.log(error)
    });
  }

  irListaMaterias() {
    this.enrutador.navigate(['/materias']);
  }
}
