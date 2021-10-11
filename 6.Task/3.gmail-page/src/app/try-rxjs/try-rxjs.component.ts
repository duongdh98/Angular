import { Component, OnInit } from '@angular/core';

// Combination

// Example 1
import { interval, timer } from 'rxjs';
import { combineLatest } from 'rxjs';

// Example 2
import { fromEvent } from 'rxjs';
import { mapTo, startWith, scan, tap, map } from 'rxjs/operators';

// Concat

// Example 1
import { of, concat } from 'rxjs';

// Example 2
import { empty } from 'rxjs';
import { delay } from 'rxjs/operators';

// Merge

// Example 1
import { merge } from 'rxjs';

// withLasterFrom

// Example 1
import { withLatestFrom } from 'rxjs/operators';

// From

// Example 1
import { from } from 'rxjs';

// debounceTime
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-try-rxjs',
  templateUrl: './try-rxjs.component.html',
  styleUrls: ['./try-rxjs.component.scss']
})
export class TryRxjsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    // Combination
    // >> combineLatest 

    // >> Example 1
    // timerTwo emits first value at n (s), then once every 4s
    const timerOne$ = timer(1000, 4000);
    const timerTwo$ = timer(2000, 4000);
    const timerThree$ = timer(3000, 4000);

    // combineLatest(timerOne$, timerTwo$, timerThree$).subscribe(
    //   ([timerValOne, timerValTwo, timerValThree]) => {
    //     console.log(
    //       `Timer One Latest: ${timerValOne},
    //       Timer Two Latest: ${timerValTwo},
    //       Timer Three Latest: ${timerValThree}`
    //     );
    //     console.log('-------------------------------------------------------------------')
    //   }
    // );

    // >> Example 2
    // elem refs
    const redTotal = document.getElementById('red-total');
    const blackTotal = document.getElementById('black-total');
    const total = document.getElementById('total');

    const addOneClick$ = id =>
      fromEvent(document.getElementById(id), 'click').pipe(
        mapTo(1),
        scan((acc, curr) => acc + curr, 0),
        startWith(0)
      );
    combineLatest(addOneClick$('red'), addOneClick$('black')).subscribe(
      ([red, black]: any) => {
        redTotal.innerHTML = red;
        blackTotal.innerHTML = black;
        total.innerHTML = red + black;
      }
    )

    // >> Concat

    // >> Example 1
    concat(
      of(1, 2, 3),
      of(4, 5, 6),
      of(7, 8, 9)
    ).subscribe(console.log);

    // >> Example 2
    // elems
    const userMessage = document.getElementById('message');
    // helper
    const delayedMessage = (message, delayedTime = 1000) => {
      return empty().pipe(startWith(message), delay(delayedTime));
    };

    concat(
      delayedMessage('Get Ready!'),
      delayedMessage(3),
      delayedMessage(2),
      delayedMessage(1),
      delayedMessage('Go!'),
      delayedMessage('', 2000)
    ).subscribe((message: any) => (userMessage.innerHTML = message));

    // concat(interval(1000), of('This', 'Nerver')).subscribe(console.log);

    // Merge

    // Example 1
    const first = interval(2500);
    const second = interval(2000);
    const third = interval(1500);
    const fourth = interval(1000);

    // const example = merge(
    //   first.pipe(mapTo('FIRST !')),
    //   second.pipe(mapTo('SECOND !')),
    //   third.pipe(mapTo('THIRD !')),
    //   fourth.pipe(mapTo('FOURTH !'))
    // );
    // const subscribe = example.subscribe(val => console.log(val));


    // startWith
    
    // Example 1
    const source = of(1, 2, 3, 4, 10);
    const example_startWith = source.pipe(startWith(0));
    const sub_startWith = example_startWith.subscribe(
      val => console.log(val)
    )

    // with Laster Form

    // Example 1
    const source_withLasterForm = interval(5000);
    const secondSource = interval(1000);

    const example_withLasterForm = secondSource.pipe(
      withLatestFrom(source_withLasterForm),
      map(([first, second]) => {
        return `Source (1s): ${first} Latest From (5s): ${second}`;
      })
    )

    const subscribe_withLlasterForm = example_withLasterForm.subscribe(val => console.log(val));

    // Form

    // Example 1 Observable from array
    console.log('.................................................');
    const arraySource = from([1, 2, 3, 4, 5]);
    const sub_from = arraySource.subscribe(
      val => console.log(val)
    )

    // Example 2 Observable from promise
    console.log('.................................................');
    //emit result of promise
    const promiseSource = from(new Promise(resolve => resolve('Hello World!')));
    //output: 'Hello World'
    const subscribe = promiseSource.subscribe(val => console.log(val));

    // Example 3: Observable from collection
    console.log('.................................................');
    const map_colecttion = new Map();
    map_colecttion.set(1, 'Hi');
    map_colecttion.set(2, 'Bye');

    const mapSource = from(map_colecttion);
    const sub_colecttion = mapSource.subscribe(
      val => console.log(val)
    )

    // Example 4: Observable from string
    console.log('.................................................');
    const source_String = from('Hello World');
    const sub_string = source_String.subscribe(
      val => console.log(val)
    )

    // debounceTime

    // Example 1: Debouncing based on time between input
    const searchBox = document.getElementById('search');
    const keyup$ = fromEvent(searchBox, 'keyup');

  }

}
