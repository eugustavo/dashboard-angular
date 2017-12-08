import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from './user.service';
import { Auth } from './Auth';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'user.component.html'
})

export class UserComponent implements OnInit{
    auth: any[];
    usuario: Auth;
    autenticacao: string;
    editar_ok = false;
    editar_erro = false;

    constructor(private userService: UserService,
        private route: ActivatedRoute, private router: Router) { }

    ngOnInit(){
        this.userService.auth().
            subscribe(auth => {
                this.auth = auth;
                this.autenticacao=typeof(this.auth[0].id);
                this.usuario = new Auth(this.auth[0].id, this.auth[0].nome, this.auth[0].email, this.auth[0].senha, this.auth[0].datanascimento, this.auth[0].altura, this.auth[0].peso, this.auth[0].sexo, this.auth[0].datacadastro, this.auth[0].status);
                if(this.autenticacao!='number')
                {
                    this.router.navigate(['']);
                }
        });
    }

    editar(login){
        this.userService.editUser(login.id, login.nome, login.email, login.senha, login.datanascimento, login.altura, login.peso, login.sexo)
      .subscribe(user => {
        this.editar_ok = true;
        this.editar_erro = false;
      },
      erro => {
        this.editar_ok = false;
        this.editar_erro = true;
      });
    }


}
