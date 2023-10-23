import { Component } from '@angular/core';
import { User } from './interfaces/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  UserData: User[] = [];

  getUserData(item: User[]) {
    this.UserData = item;
  }
}
