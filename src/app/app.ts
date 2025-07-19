import {Component, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {Socket} from "socket.io";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  inputData: string = '';

  submitData() {
    if (this.inputData == '') {
      alert("no input detected")
    } else {
      alert(this.inputData)
    }
  }

  protected readonly title = signal('FlunChanClientPlayer');
}
