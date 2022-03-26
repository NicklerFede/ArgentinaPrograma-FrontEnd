import { Injectable } from '@angular/core';
import { LoginI } from '../../modelos/login.interface';
import { ResponseI } from '../../modelos/response.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url: string = 'http://localhost:4200/usuario';

  constructor(private http: HttpClient) {}
  
  Url = 'http://localhost:8080/Porfolio/usuario';

  getUsuario(){ 
    return this.http.get<LoginI>(this.Url)
  }
  

  loginByEmail(form: LoginI): Observable<ResponseI> {
    let direccion = this.url + "auth";
    return this.http.post<ResponseI>(direccion, form);
  }
}
