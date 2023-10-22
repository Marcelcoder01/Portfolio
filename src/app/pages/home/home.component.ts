import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  progress: number = 0; // Inicialmente, la barra está vacía
  progress2: number = 0; // Inicialmente, la segunda barra está vacía

  ngOnInit() {
    const finalProgress = 80; // Valor final de progress (80%)
    const finalProgress2 = 70; // Valor final de progress2 (70%)
    const duration = 2000; // Duración en milisegundos (2 segundos)
    const interval = 10; // Intervalo de actualización en milisegundos

    const step = (finalProgress / duration) * interval;
    const step2 = (finalProgress2 / duration) * interval;

    const intervalId = setInterval(() => {
      if (this.progress < finalProgress) {
        this.progress += step;
      }

      if (this.progress2 < finalProgress2) {
        this.progress2 += step2;
      }

      if (this.progress >= finalProgress && this.progress2 >= finalProgress2) {
        clearInterval(intervalId); // Detener el intervalo una vez que alcancen los valores finales
      }
    }, interval);
  }
}





