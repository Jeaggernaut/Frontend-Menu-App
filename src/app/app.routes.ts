import { Routes } from '@angular/router';
import { MateriaLista } from './materia-lista/materia-lista';
import { AgregarMateria } from './agregar-materia/agregar-materia';

//http:localhost:4200/materias
export const routes: Routes = [
    {path: 'materias', component: MateriaLista},
    {path: '', redirectTo: 'materias', pathMatch: 'full'},
    {path: 'agregar-materia', component: AgregarMateria}
];
