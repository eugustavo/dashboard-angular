import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModel } from '@angular/forms';
import { HttpModule } from '@angular/http';
//import { UsuarioRoutingModule } from './user-routing.module';

import { UserComponent } from './user.component';
import { UserService } from './user.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule,
    //UsuarioRoutingModule
  ],
  declarations: [ UserComponent ],
  providers: [UserService],
})
export class UserModule { }
