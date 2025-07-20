import {Component, OnInit, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  inputData: string = '';
  ip = 'http://localhost:5000'
  socket = new WebSocket(this.ip);

  message: string = '';

  chatLog: string[] = [];


  ngOnInit(){
    this.Connect()
  }


  Connect() {
    this.socket = new WebSocket(this.ip)

    this.socket.onopen = () => {
      this.chatLog.push("joined server " + this.ip)
    }

    this.socket.onmessage = (e: MessageEvent) => {
      this.chatLog.push("server: " + e.data)
    }
  }

  sendMessage(){
    this.chatLog.push("sent: " + this.message)
    this.socket.send(this.message)
  }

  protected readonly title = signal('FlunChanClientPlayer');
}
