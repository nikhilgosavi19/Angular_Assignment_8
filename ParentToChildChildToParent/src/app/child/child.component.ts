import { Component,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() parentMessage: string = '';
  @Output() childMessage = new EventEmitter<string>(); 

  sendMessageToParent() {
    this.childMessage.emit('Hello from child');
  }
}