import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

/***
 * La difference entre le behaviorSubject et le subject est que le subject subject
 * ne memorise la derniere valeur alors que le behavior le garde en memoire la dernière valeur du flux
 */
@Component({
  selector: 'app-les-subject',
  templateUrl: './les-subject.component.html',
  styleUrls: ['./les-subject.component.scss'],
})
export class LesSubjectComponent implements OnInit {
  constructor() {}

  //Subject est en meme temps observable et observer
  ngOnInit(): void {
    const subject = new Subject<number>();

    const s1 = subject.subscribe((x) => console.log('[s1]', x));
    const s2 = subject.subscribe((x) => console.log('[s2]', x));

    subject.next(1);
  }
}
