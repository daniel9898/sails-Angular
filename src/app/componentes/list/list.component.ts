import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../servicios/usuario.service';
import { Router, ActivatedRoute } from '@angular/router';
//import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  users : any;
  constructor(private _user: UsuarioService,
  	          private act_router: ActivatedRoute,
		          private router: Router) {
    this.getUsers();
  }

  async getUsers(){
    let resp : any = await this._user.getAll('user').toPromise();
    console.log(resp.users);
    this.users = resp.users;
  }

  ngOnInit() { }

  goToForm(user:any){
    console.log('USUARIO A EDITAR ',user);
    localStorage.setItem('user_to_update',JSON.stringify(user));
    localStorage.setItem('action','edit');
    this.router.navigate(['/']);
  }

  async deleteUser(user:any){
    console.log('USUARIO A BORRAR ',user);
    try{
        let resp = await this._user.delete('user',user.id).toPromise();
        console.log('resp ',resp);
        this.getUsers();
    }catch(e){
        console.log('Error en deleteUser ',e);
    }

  }

}
