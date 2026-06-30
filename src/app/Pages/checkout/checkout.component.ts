import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common'; 
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser'; // <-- 1. Importamos EmailJS

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements OnInit { 
  planSeleccionado: string = '';
  precioReferencia: string = '';
  tipoServicio: string = ''; 
  
  formData = {
    nombre: '',
    empresa: '',
    email: '',
    telefono: '',
    detalles: ''
  };

  statusMessage = ''; // Para mostrar "Enviando..." o "¡Éxito!"

  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.planSeleccionado = params['plan'] || 'Servicio Personalizado';
      this.precioReferencia = params['precio'] || 'A cotizar';
      this.tipoServicio = params['tipo'] || 'Servicio Individual';
    });
  }

  volverAtras() {
    this.location.back();
  }

  // 2. Modificamos el envío para usar EmailJS
  enviarSolicitud(e: Event) {
    e.preventDefault();
    this.statusMessage = 'Enviando...';

    // Armamos un mensaje que junta el plan, la empresa y el detalle
    const mensajeCompleto = `
      SOLICITUD DE PRESUPUESTO
      ========================
      Plan elegido: ${this.planSeleccionado} (${this.tipoServicio})
      Precio base visto: $${this.precioReferencia}
      Empresa/Marca: ${this.formData.empresa || 'No especificó'}
      
      MENSAJE DEL CLIENTE:
      ${this.formData.detalles}
    `;

    // Armamos el objeto que EmailJS está esperando (igual que en tu Contacto)
    const payload = {
      from_name: this.formData.nombre,
      reply_to: this.formData.email,
      phone_number: this.formData.telefono,
      message: mensajeCompleto // Metemos todo nuestro texto armado acá
    };

    const serviceID = 'service_rhbu60u';
    const templateID = 'template_8qnw7b9';
    const publicKey = '-TOpNPeBHvZ7LWEjY';

    emailjs
      .send(serviceID, templateID, payload, {
        publicKey: publicKey,
      })
      .then(
        () => {
          this.statusMessage = '¡Solicitud enviada con éxito! Nos pondremos en contacto pronto.';

          // Limpiamos el formulario
          this.formData = { nombre: '', empresa: '', email: '', telefono: '', detalles: '' };
          setTimeout(() => this.statusMessage = '', 5000);
        },
        (error) => {
          this.statusMessage = 'Hubo un error al enviar. Por favor verifica tu conexión e intenta nuevamente.';
          console.error('FAILED...', (error as EmailJSResponseStatus).text);
        }
      );
  }
}