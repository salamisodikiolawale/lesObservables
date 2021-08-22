import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

/***
 * La difference entre le behaviorSubject et le subject est que le subject subject
 * ne memorise la derniere valeur alors que le behavior le garde en memoire la dernière valeur du flux
 * NB : l'observable est la source de la donnée
 * l'observer est l'objet qui va manipuler c'st donnée
 */

@Component({
  selector: 'app-behavior',
  templateUrl: './behavior.component.html',
  styleUrls: ['./behavior.component.scss'],
})
export class BehaviorComponent implements OnInit {
  constructor() {}

  //Subject est en meme temps observable et observer
  ngOnInit(): void {
    const subject = new BehaviorSubject<number>(0); //0reprensente la valeur initial, cela peut etre n'import null par exemple

    const s1 = subject.subscribe((x) =>
      console.log('[BehaviorComponent : s1]', x)
    );
    subject.next(1);

    const s2 = subject.subscribe((x) =>
      console.log('[BehaviorComponent :s2]', x)
    );
  }
}
