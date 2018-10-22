import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../servicios/usuario.service';
import { SocketService } from '../../servicios/socket.service';
import { Router, ActivatedRoute } from "@angular/router";
//import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  user : any = {
    name : '',
    last_name : '',
    age : '',
    email: ''
  }
  action : string;
  //userSubs : Subscription;

  constructor(private _user: UsuarioService,
              private _socket: SocketService,
              private router: Router) {
  }

  ngOnInit(){
    this.action = localStorage.getItem('action');
      if(this.action == 'edit'){
        this.user = JSON.parse(localStorage.getItem('user_to_update'));
      }
  }

  save(){
    this.action != 'edit' ? this.createUser() : this.updateUser();
    localStorage.setItem('action','');
    this._socket.socketBroadcast(this.user);
  }

  async createUser(){
    try{
    	console.log(this.user);
    	let user_created = await this._user.save('user',this.user).toPromise();
    	console.log('user_created ',user_created);
    	this.router.navigate(['list']);

    }catch(e){
        console.log('ERROR EN createUser : ',e);
    }
  }

  async updateUser(){
    try{
      console.log(this.user);
      let user_updated = await this._user.update('user',this.user).toPromise();
      console.log('user_updated ',user_updated);
      this.router.navigate(['list']);

    }catch(e){
        console.log('ERROR EN updateUser : ',e);
    }
  }

}
