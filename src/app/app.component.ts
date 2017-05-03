import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import {UserValidator } from './validaciones';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	form: FormGroup;
	constructor(private fb:FormBuilder){
		this.form = fb.group({
			codigo:['',UserValidator.verificarEspacios],
			nombre:['',Validators.compose([
				Validators.required,
				Validators.maxLength(5),
				Validators.minLength(3),
				UserValidator.verificarEspacios
			])],
			contacto:fb.group({
				telefono:'',
				email:''
			})
		})
	}
}
