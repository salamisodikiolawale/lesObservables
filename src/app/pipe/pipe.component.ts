import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map, filter } from 'rxjs/operators';

interface User {
  firstName: string;
  lastName: string;
}

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss'],
})
export class PipeComponent implements OnInit {
  user: BehaviorSubject<User> = new BehaviorSubject({
    firstName: '',
    lastName: '',
  });

  public fullName!: string;

  constructor() {}

  ngOnInit(): void {
    //http
    this.user.next({
      firstName: 'jean',
      lastName: 'Depuis',
    });

    const s1 = this.user
      .pipe(
        filter((user: User) => true), //false
        map((user: User) => {
          return `${user.firstName} ${user.lastName}`;
        })
      )
      .subscribe((fullName: string) => console.log(fullName));
  }
}
