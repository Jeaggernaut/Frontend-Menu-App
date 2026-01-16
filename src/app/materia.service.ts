import { HttpClient, HttpParams } from '@angular/common/http';
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
    const userId = localStorage.getItem('userId');
    let params = new HttpParams();
    if (userId) {
      params = params.set('userId', userId);
    }
    return this.clienteHttp.get<Materia[]>(this.urlBase, { params });
  }

  agregarMateria(materia: Materia): Observable<Object>{
    const userId = localStorage.getItem('userId');
    const payload: any = {
      materia: materia.materia,
      proyecto: materia.proyecto,
      miembros: Number(materia.miembros)
    };
    if (userId) {
      payload.usuario_id = Number(userId);
    }
    let params = new HttpParams();
    if (userId) {
      params = params.set('userId', userId);
    }
    console.log('Enviar payload agregarMateria:', payload, 'params:', params.toString());
    return this.clienteHttp.post(this.urlBase, payload, { params });
  }

}
