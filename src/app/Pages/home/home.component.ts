import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlueSectionComponent } from '../../Sections/blue-section/blue-section.component';
import { ProyectosComponent } from '../../Sections/proyectos/proyectos.component';
import { ServiciosComponent } from '../../Sections/servicios/servicios.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,BlueSectionComponent, ProyectosComponent, ServiciosComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // Se eliminó la lógica de videoIniciado ya que el iframe es directo
}
