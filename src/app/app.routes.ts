import { Routes } from '@angular/router';
import { MateriaLista } from './materia-lista/materia-lista';
import { AgregarMateria } from './agregar-materia/agregar-materia';
import { Login } from './login/login';
import { Registro } from './registro/registro';

//http:localhost:4200/materias
export const routes: Routes = [
    {path: 'login', component: Login},
    {path: 'registro', component: Registro},
    {path: 'materias', component: MateriaLista},
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'agregar-materia', component: AgregarMateria}
];
