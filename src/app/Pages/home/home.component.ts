import { Component } from '@angular/core';
import { BlueSectionComponent } from "../../Sections/blue-section/blue-section.component";
import { ProyectosComponent } from "../../Sections/proyectos/proyectos.component";
import { ServiciosComponent } from "../../Sections/servicios/servicios.component";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home',
  imports: [BlueSectionComponent, ProyectosComponent, ServiciosComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
