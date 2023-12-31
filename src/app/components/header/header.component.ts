import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  selectedCV: string = 'Mi CV';
  espanolURL: string = 'https://drive.google.com/file/d/1wFRo47p6Owsq8GmT_urYPv6XZJSr-UEn/view?usp=sharing';
  englishURL: string = 'https://drive.google.com/file/d/1GKtIWFt2K6sKTMMCWyxKOx9FjoUbzkWK/view?usp=sharing';


  //-->> Función para cambiar el CV. Si redirectToCV cuyo valor por defecto es'Mi CV',
  // toma el valor de español o inglés, usando windows.location.href que es un parametro usado
  // para redirección, tomaría el valor de la url según sea el caso y nos llevaría al enlace correspondiente.
  // para ello, definimos arriba las propiedades espanolURL y englishURL que contienen los enlaces.

  redirectToCV() {
    if (this.selectedCV === 'español') {
      window.location.href = this.espanolURL;
    } else if (this.selectedCV === 'english') {
      window.location.href = this.englishURL;
    }
  }
}
