import { Component} from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-child',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Output() sendDataToParent = new EventEmitter<string>(); 

  inputText: string = ''; 

  sendMessage() {
    this.sendDataToParent.emit(this.inputText); 
    this.inputText = ''; 
  }
}