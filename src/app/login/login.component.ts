import { Component, OnInit } from '@angular/core';
import { NgForm , NgModel, FormsModule} from '@angular/forms';
import { fadeInAnimation } from '../animation.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [fadeInAnimation]
})
export class LoginComponent  {
private name !: string

constructor(){

}


  onSubmit(value: NgForm){
    console.log(value);
    
  }
}
