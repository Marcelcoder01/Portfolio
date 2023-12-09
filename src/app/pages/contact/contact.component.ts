import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user/user.module';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  contactForm: FormGroup;

  public user:User = new User("", "", "")

  constructor(private fb: FormBuilder){
    this.contactForm = this.fb.group({
      name: [this.user.name, Validators.required],
      email: [this.user.email, Validators.required],
      text: [this.user.text, Validators.required]
    });
  }

  onSubmit(){
    this.user = this.contactForm.value;
    console.log(this.user);
    alert("Estoy trabajando en ello, mientras tanto puedes escribirme a mi whatsapp 677281300")
  }
}
