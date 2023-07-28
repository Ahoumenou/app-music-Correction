import { Component, Input } from '@angular/core';
import { active, fadeInAnimation } from './animation.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeInAnimation],
})
export class AppComponent {
  title = 'app-music';

  parentReceive($emit: string){
    console.log('parent:' + $emit);
    this.parentReceive
    
  }

}
