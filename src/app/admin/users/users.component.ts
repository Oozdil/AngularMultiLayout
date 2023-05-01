import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users: UserModel[] = [
    new UserModel("Marc", "Otto", "@mdo"),
    new UserModel("Jacob", "Thornton", "@fat"),
    new UserModel("Larry", "The Bird", "@twitter")];
}



export class UserModel {
  First: string;
  Last: string;
  Handle: string;

  constructor(first: string, last: string, handle: string) {
    this.First = first;
    this.Last = last;
    this.Handle = handle;
  }
}