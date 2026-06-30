import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sistema',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './sistema.component.html',
  styleUrl: './sistema.component.css'
})
export class SistemaComponent {

  // ====== Diferenciales ("su potencia") ======
  potencia = [
    {
      icon: 'building',
      title: 'Tus datos, solo tuyos',
      desc: 'La información de tu comercio queda guardada de forma privada y separada. Nadie más la ve.'
    },
    {
      icon: 'refresh',
      title: 'Se actualiza solo',
      desc: 'Recibís las mejoras y novedades automáticamente, sin reinstalar nada ni llamar a un técnico.'
    },
    {
      icon: 'cloud',
      title: 'En la nube y respaldado',
      desc: 'Tu información está segura y con copia en la nube. Entrás con tu usuario y contraseña desde tu PC.'
    },
    {
      icon: 'wallet',
      title: 'Control de la plata',
      desc: 'Caja en vivo, arqueo, egresos y fiados. Sabés en todo momento dónde está cada peso.'
    },
    {
      icon: 'chart',
      title: 'Sabés cuánto ganás',
      desc: 'Ganancia y margen por producto, no solo "cuánto vendí". Decidís con números reales.'
    },
    {
      icon: 'bolt',
      title: 'Rápido en el mostrador',
      desc: 'Pensado para vender en segundos: lector de código de barras, teclado y venta a granel.'
    }
  ];

  // ====== Pasos para empezar ======
  pasos = [
    {
      num: '01',
      title: 'Hablá con nosotros',
      desc: 'Te mostramos GestorPro en vivo y resolvemos tus dudas. Coordinamos una demo sin compromiso.'
    },
    {
      num: '02',
      title: 'Creá tu cuenta',
      desc: 'Damos de alta tu comercio y dejamos todo listo. Tus datos quedan privados y seguros desde el primer día.'
    },
    {
      num: '03',
      title: 'Descargá la app',
      desc: 'Instalás GestorPro en tu PC con Windows y empezás a vender. Se actualiza solo de ahí en más.'
    }
  ];
}
