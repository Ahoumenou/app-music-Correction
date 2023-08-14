import { Component } from '@angular/core';
import { Music } from 'src/album';

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.css']
})
export class FormTemplateComponent {
  genres = ['Jazz', 'Hip-Hop', 'Zouk', 'Rap', 'Reggae', 'RGB'];
musicModel = new Music('', '', this.genres[0]);
submitted = false;

onSubmit(musicForm:any){
  console.log(musicForm);
  // this.submitted = true
  this.submitted = !this.submitted
}

/**
 * Visité : touched | untouched
 * Change : dirty | pristine
 * Valide: valid | invalid
 * 
 * FormGroup
 *   -> FormControl
 *   -> FormControl
 *   -> FormControl
 */

}
