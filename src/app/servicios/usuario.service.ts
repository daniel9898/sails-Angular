import { Injectable } from '@angular/core';
import { CustomHttpService } from './custom-http.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private miHttp: CustomHttpService) { }

  getAll(endPoint: string){
    return this.miHttp.runGet(endPoint);
  }

  getAllbyProfile(endPoint: string, profile:string){
    return this.miHttp.runGetWhitParam(endPoint, profile);
  }

  getAvailablesDrivers(endPoint: string, hour:string, date:string){
    return this.miHttp.runGetWhitParams(endPoint, hour, date);
  }

  save(endPoint: string, data: any){
    return this.miHttp.runPost(endPoint, data);
  }

  signIn(endPoint: string, data: any){
    return this.miHttp.runPost(endPoint, data);
  }

  update(endPoint: string, user: any){
    return this.miHttp.runUpdate(endPoint, user.id, user);
  }

  delete(endPoint: string, id: any){
    return this.miHttp.runDelete(endPoint, id);
  }
}
