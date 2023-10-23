import { Component, EventEmitter, Output } from '@angular/core';
import { User } from '../interfaces/User';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  userList: User[];

  userGroup = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    dateOfBirth: [new Date(), Validators.required],
    phoneNum: ['', Validators.required],
    email: ['', Validators.required]
  })

  @Output() userData: EventEmitter<any[]> = new EventEmitter<any[]>();

  passData() {
    this.userData.emit(this.userList);
  }

  addUser() {
    if (this.userGroup.valid) {
      const newUser: any = this.userGroup.value;
      this.userList.push(newUser);
      this.userGroup.reset();
    }
  }
  

  constructor(private fb: FormBuilder) {
    this.userList = [
      {
        firstName: 'John',
        lastName: 'Doe',
        dateOfBirth: new Date(1999, 12, 22),
        phoneNum: "123-12-12-13",
        email: "John.Doe@email.com"
      },
      {
        firstName: 'Jane',
        lastName: 'Doe',
        dateOfBirth: new Date(1989, 9, 12),
        phoneNum: "123-27-99-00",
        email: "Jane.Doe@email.com"
      },
      {
        firstName: 'Megan',
        lastName: 'Woe',
        dateOfBirth: new Date(2001, 2, 19),
        phoneNum: "123-14-15-16",
        email: "Megan.Woe@email.com"
      }
    ]
  }
}
