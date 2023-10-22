import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit{

  showMessage: boolean = false;

  ngOnInit() {
    setTimeout(() => {
      this.showMessage = true;
      setTimeout(() => {
        this.showMessage = false;
      }, 3000); // Ocultar el mensaje después de 3 segundos (3000 ms)
    }, 500); // Mostrar el mensaje
  }
}
