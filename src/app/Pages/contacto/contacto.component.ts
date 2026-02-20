import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {

  // Objeto actualizado con el nuevo campo phone_number
  form = {
    from_name: '',
    reply_to: '',
    phone_number: '',
    message: ''
  };

  statusMessage = '';

  public sendEmail(e: Event) {
    e.preventDefault();
    this.statusMessage = 'Enviando...'; // Feedback inmediato

    // TUS CREDENCIALES (Las que me pasaste)
    const serviceID = 'service_rhbu60u';
    const templateID = 'template_8qnw7b9';
    const publicKey = '-TOpNPeBHvZ7LWEjY';

    emailjs
      .send(serviceID, templateID, this.form, {
        publicKey: publicKey,
      })
      .then(
        () => {
          this.statusMessage = '¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.';
          // Limpiar el formulario
          this.form = { from_name: '', reply_to: '', phone_number: '', message: '' };
          // Borrar mensaje de éxito después de 5 segundos
          setTimeout(() => this.statusMessage = '', 5000);
        },
        (error) => {
          this.statusMessage = 'Hubo un error al enviar. Por favor verifica tu conexión e intenta nuevamente.';
          console.error('FAILED...', (error as EmailJSResponseStatus).text);
        },
      );
  }
}