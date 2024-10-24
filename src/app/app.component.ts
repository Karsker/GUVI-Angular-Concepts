import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AboutComponent, FormsModule, HomeComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-tour-of-heroes';
  isDisabled = false;
  myData = "data to send";
  twoWayBinding = "";

  value = 1000;

  handleIncomingData(event: string) {
    console.log(event);
  }

  generateRandomNumber() {
    this.value = Math.floor(Math.random()*100);
  }
}
