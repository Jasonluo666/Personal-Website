import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import {Observable} from 'rxjs';
import { ConfigurationService } from './configuration.service';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  constructor(private http : HttpClient, private config: ConfigurationService) { }

  private socket = io(this.config.get('backend'), {transports: ['websocket']});
  backend = this.config.get('backend');

    joinRoom(data)
    {
        this.socket.emit('join',data);
    }

    newUserJoined()
    {
        let observable = new Observable<{user:String, message:String}>(observer=>{
            this.socket.on('new user joined', (data)=>{
                observer.next(data);
            });
            return () => {this.socket.disconnect();}
        });

        return observable;
    }

    sendMessage(data)
    {
        this.socket.emit('message',data);
        this.http.post(this.backend + 'api/chatroom/push/', data).subscribe(data => {
            console.log(data);
        });
    }

    newMessageReceived(){
        let observable = new Observable<{user:String, message:String}>(observer=>{
            this.socket.on('new message', (data)=>{
                observer.next(data);
            });
            return () => {this.socket.disconnect();}
        });

        return observable;
    }

    loadChatRoom(cb){
        this.http.get(this.backend + 'api/chatroom/fetch/').subscribe(data => {
            cb(data);
        });
    }
}
