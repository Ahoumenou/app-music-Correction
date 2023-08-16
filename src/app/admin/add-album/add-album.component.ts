
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validator, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { AlbumService } from 'src/app/album.service';
import { Album } from 'src/album';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-add-album',
  templateUrl: './add-album.component.html',
  styleUrls: ['./add-album.component.css']
})
export class AddAlbumComponent implements OnInit {

  albumForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.albumForm = this.fb.group({
      id: '',
      name: ['', [
        Validators.required,
        Validators.minLength(4)
      ]],
      title: ['', [
        Validators.required
      ]],
      ref: ['', [
        Validators.required,
        Validators.pattern('\\w{5}') // doit avoir 5 caractères
      ]],
      duration: ['', [
        Validators.required,
        Validators.pattern('[0-9]*'), // doit avoir une site de chiffres
        Validators.max(900)
      ]],
      description: ['', [
        Validators.required
      ]],
      tags: this.fb.array([
        this.fb.control('')
      ]),
      // tags: new FormArray([
      //   new FormControl('')
      // ]),
      status: 'off',
    });
  }


  /** Gettes qui seront utilisés pour la validation */
  get name() { return this.albumForm.get('name') }
  get title() { return this.albumForm.get('title') }
  get ref() { return this.albumForm.get('ref') }
  get duration() { return this.albumForm.get('duration') }
  get description() { return this.albumForm.get('description') }
  get tags() { return this.albumForm.get('tags') as FormArray }

  onSubmit() {
    // Rediriger sur la page 'admin
    console.log(this.albumForm.value);
    this.router.navigate(['/admin'], {
      queryParams: {
        message: "Album ajouté avec succès ",
        model: "text-devinci-002-render-sha"
      }
    })

  }

  addTag() {
    this.tags.push(this.fb.control(''))
  }
}
