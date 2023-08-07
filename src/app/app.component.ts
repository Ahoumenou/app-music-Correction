import { Component, Input } from '@angular/core';
import { interval, map, Observable, take } from 'rxjs';
import { active, fadeInAnimation } from './animation.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeInAnimation],
})
export class AppComponent {
  title = 'app-music';
  receivedText: string | undefined;
  timerObservable!: Observable<string>; 
  // !: Oprérateur de confiance | opérateur d'affirmation de non milité,
  count!: string;

  constructor(){};

  ngOnInit(): void{
     this.timerObservable = interval(1000).pipe(
       take(3600 * 12), // La fonction s'arrete à 12h
      map(num => {
        const hours = Math.floor(num / 3600)
        const minutes = Math.floor((num / 60) )
        return `${this.format(hours)} h ${this.format(minutes - hours * 60)} min ${ this.format(num - minutes * 60)}s`;
      })
     )
     this.timerObservable.subscribe(time => {
      this.count = time
     })
  }

 format(num: number){
  return (num < 10 ? '0' : '') + num;
 }

  parentReceive($emit: string){
    console.log('parent:' + $emit);
    this.receivedText = $emit
    
  }



}
