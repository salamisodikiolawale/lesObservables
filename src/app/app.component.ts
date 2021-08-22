import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  private suscription!: Subscription;

  ngOnInit(): void {
    const observable = new Observable((observer: Observer<any>) => {
      const data = 2;
      observer.next(data);
      observer.next(3);
      observer.next(4);
      setTimeout(() => observer.next(5), 3000); //Async
      observer.next(6);
      // observer.complete(); //Stop le processus
      observer.next(7);
      observer.error(new Error('Oops!!!!!!!!!!')); //Pour gerer l'erreur
      observer.next(8);
    });

    //Premiere mannière d'utilisation
    // observable.subscribe({
    //   next: (a) => console.log('[next] :', a),
    //   complete: () => console.log('[completed]'),
    //   error: (a) => console.log('[error] :', a),
    // });

    //Deuxieme maniere d'utilisation
    this.suscription = observable.subscribe(
      (a) => console.log('[next] :', a), //next
      (a) => console.log('[error] :', a), //error
      () => console.log('[completed]') //completed NB = cette methode est optionnelle
    );

    //NB: On n'est pas obliger de definir toute le erreurs
    // observable.subscribe({
    //   next: (a) => console.log('[next] :', a),
    //   complete: () => console.log('[completed]'),
    // });
    // observable.subscribe({
    //   next: (a) => console.log('[next] :', a),
    // });
  }

  ngOnDestroy() {
    this.suscription.unsubscribe();
  }
}
