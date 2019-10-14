import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/service/chat.service';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent implements OnInit {
    constructor(private _chatService:ChatService){
        this._chatService.newMessageReceived()
        .subscribe(_ => {
          this._chatService.loadChatRoom(data => {
            this.messageArray = [];
            for(const x of data){
              this.messageArray.push(x);
            }
          });
        });
    }

  ngOnInit() {
    this._chatService.loadChatRoom(data => {
      this.messageArray = [];
      for(const x of data){
        this.messageArray.push(x);
      }
    });
  }

  user:String;
  room:String;
  messageText:String;
  messageArray:Array<{user:String,message:String,time:String}> = [];
  error:String;

    join(){
        this._chatService.joinRoom({user:this.user, room:this.room});
    }

    sendMessage()
    {
      if(this.user === undefined){
        this.error = "Please Set Your Username";
        return;
      }

      this.error = undefined;
      this._chatService.sendMessage({user:this.user, room:this.room, message:this.messageText});
      this.messageText = '';

      this._chatService.loadChatRoom(data => {
        this.messageArray = [];
        for(const x of data){
          this.messageArray.push(x);
        }
      });
    }
}
