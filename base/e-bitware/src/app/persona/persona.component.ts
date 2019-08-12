import { Component, OnInit, NgModule } from '@angular/core';
import { PersonaModel } from './personaModel'

//import { FormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})

export class PersonaComponent implements OnInit {

  personsList: Array<PersonaModel> = [];

  constructor() { }
   ngOnInit() {
   }
   onClickSubmit(formData) {
     console.log(formData)
     var edadParam = formData.edad == "" ? 0 : + formData.edad;
     var pesoParam = formData.peso == "" ? 0 : + formData.peso;
     var alturaParam = formData.altura == "" ? 0 : + formData.altura;

     let persona1 = new PersonaModel(formData.nombre, edadParam, formData.sexo, pesoParam, alturaParam);
     let persona2 = new PersonaModel(formData.nombre, edadParam, formData.sexo, 70, 1.70);
     let persona3 = new PersonaModel(formData.nombre, edadParam, formData.sexo, 70, 1.70);

     persona3.setNombre = "Karla";
     persona3.setEdad = 30;
     persona3.setSexo = "M";
     persona3.setAltura = 1.50;
     persona3.setPeso = 40;
     this.personsList.push(persona1);
     this.personsList.push(persona2);
     this.personsList.push(persona3);
     //alert('Your Email is : ' + persona1.toString());
     //console.log(persona1)
     //console.log(this.personsList)
   }
}
