import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  messageToChild: string = 'Hello from parent'; 
  messageFromChild: string = ''; 


  receiveMessage(message: string) {
    this.messageFromChild = message;

}  
}
