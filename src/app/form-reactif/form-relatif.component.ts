import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-relatif',
  templateUrl: './form-relatif.component.html',
  styleUrls: ['./form-relatif.component.css']
})
export class FormRelatifComponent {

  constructor(
    private fb:FormBuilder
    ){}
  
  genres = ['Jazz', 'Hip-Hop', 'Zouk', 'Rap', 'Reggae', 'RGB'];
  // Group de champ de saisi
  musicForm = this.fb.group({
    // Les élements de saisi
    name: ['', Validators.minLength(4)],
    auteur: ['', Validators.required],
    style: ['Selectionnez le genre de music']
    
  });
  // musicForm = new FormGroup({
  //   // Les élements de saisi
  //   name:new FormControl('', Validators.required),
  //   auteur:new FormControl('', Validators.required),
  //   style: new FormControl(this.genres[0]),
    
  // });

  search = new FormControl('');
 
  get name(){
    return this.musicForm.get("name")
  }
  get auteur(){
    return this.musicForm.get("auteur")
  }
  get style(){
    return this.musicForm.get("style")
  }

  onSubmit(){
    console.warn(this.musicForm.value);   
    // console.log(this.name);
    // console.log(this.auteur);
    // console.log(this.style);
    

  }
}
