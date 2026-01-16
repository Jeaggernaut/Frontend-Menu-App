import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  userId: string;
  userName: string;
  userEmail: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
}

export interface RegisterResponse {
  id: string;
  email: string;
  nombre: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private urlBase = "http://localhost:8080/menu-app";
  private clienteHttp = inject(HttpClient);

  login(email: string, password: string): Observable<LoginResponse> {
    const loginRequest: LoginRequest = { email, password };
    return this.clienteHttp.post<LoginResponse>(`${this.urlBase}/auth/login`, loginRequest);
  }

  register(email: string, password: string): Observable<RegisterResponse> {
    const registerRequest: RegisterRequest = { email, password };
    return this.clienteHttp.post<RegisterResponse>(`${this.urlBase}/auth/registro`, registerRequest);
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('userName');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}
