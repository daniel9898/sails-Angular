import { Injectable } from '@angular/core';
import * as socketIOClient from 'socket.io-client';
import * as sailsIOClient from 'sails.io.js';
var io = sailsIOClient(socketIOClient);
io.sails.url = 'https://realtime-proyect.herokuapp.com';

@Injectable({
  providedIn: 'root'
})



export class SocketService {

  constructor() { 
    //this.test();
  }

  socketOn(){
    io.socket.on('connect', data => {
	  console.log('conectado');
	  io.socket.post('/onConnect','',(data1,data2)=> {
         console.log(data1,data2);
	  })
	});

	io.socket.on('chat', data => {
	  console.log(data);
	});


  }

  sendMessage(user:any){
  	io.socket.post('/sendMessage', user ,(data1,data2)=> {
        console.log(data1,data2);
	})
  }

}
