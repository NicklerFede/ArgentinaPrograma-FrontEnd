import { Injectable } from '@angular/core';
import { LoginI } from '../../modelos/login.interface';
import { ResponseI } from '../../modelos/response.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url: string = 'http://localhost:4200/usuario';

  constructor(private http: HttpClient) {}

  loginByEmail(form: LoginI): Observable<ResponseI> {
    let direccion = this.url + "auth";
    return this.http.post<ResponseI>(direccion, form);
  }
}
