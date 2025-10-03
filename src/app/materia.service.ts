import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Materia } from './materia';

@Injectable({
  providedIn: 'root'
})
export class MateriaService {
  
  private urlBase = "http://localhost:8080/menu-app/materias";
  private clienteHttp = inject(HttpClient);

  obtenerMateriasLista(): Observable<Materia[]>{
    return this.clienteHttp.get<Materia[]>(this.urlBase);
  }

}
