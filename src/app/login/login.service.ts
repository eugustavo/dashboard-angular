import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/find';
//import { Auth } from './table/Auth';

@Injectable()
export class LoginService {
  API_URL = "http://localhost:3000";
  constructor(private http: Http) { }

  auth(): Observable<any[]> {
        return this.http.get('http://localhost:3000/auth')
            .map(response => response.json() as any[]);
  }

  login(email: string, senha: string): Observable<any[]> {
        return this.http.get('http://localhost:3000/usuarios?email='+email+'&senha='+senha)
            .map(response => response.json() as any[]);
  }

  addUser(id: Number, nome: String, email: String, senha: String, datanascimento: Date, altura: Number, peso: Number, sexo: String): Observable<any> {
    const user = {'nome': nome, 'email': email , 'senha': senha, 'datanascimento': datanascimento, 'altura': altura, 'peso': peso, 'sexo': sexo};
    return this.http.post(this.API_URL + '/usuarios', user);
  }
}
