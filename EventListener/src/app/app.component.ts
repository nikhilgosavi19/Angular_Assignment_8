import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  inputText: string = ''; 


  updateInputText(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.inputText = inputElement.value;
}
}