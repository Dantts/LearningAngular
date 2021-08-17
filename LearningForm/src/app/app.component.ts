import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IClientProps } from './ClientModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{
  title = 'LearningForm';

  constructor(private fb: FormBuilder){}

  clientForm: FormGroup;

  masks = {
    cpf: '000.000.000-00',
    birthday: 'd0/M0/0000',
    phone: '(00) 0 0000-0000',
    preco: '0*,000.00',
    porcent: '0*'
  }

  ngOnInit(): void {
    this.createForm();
  }


  createForm(){
    this.clientForm = this.fb.group({
      cpf: this.fb.control('', Validators.required),
      phone: this.fb.control('').disable(),
      porcent: this.fb.control('').disable(),
      age: this.fb.control('').disable(),
      preco: this.fb.control('').disable()
    })
  }

  onSubmit(){
    console.log(this.clientForm.value)
  }

}
