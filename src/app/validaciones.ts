import { AbstractControl } from '@angular/forms';

export class UserValidator{
	static verificarEspacios(c:AbstractControl){
		if(c.value ==  null) return null;
		if (c.value.indexOf(' ') >= 0) {
			return { sinEspacios: true }
		}
		return null;
	}
}