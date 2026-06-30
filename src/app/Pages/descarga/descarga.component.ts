import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-descarga',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './descarga.component.html',
  styleUrl: './descarga.component.css'
})
export class DescargaComponent {
  pasos = [
    {
      num: '01',
      title: 'Hablá con nosotros',
      desc: 'Te mostramos GestorPro en vivo y coordinamos una demo sin compromiso.'
    },
    {
      num: '02',
      title: 'Creá tu cuenta',
      desc: 'Damos de alta tu comercio y dejamos todo listo. Tus datos quedan privados y seguros.'
    },
    {
      num: '03',
      title: 'Descargá e instalá',
      desc: 'Bajás GestorPro a tu PC con Windows y empezás a vender. Se actualiza solo de ahí en más.'
    }
  ];
}
