import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./layout/header/header.component";
import { FooterComponent } from "./layout/footer/footer.component";
import { HomeComponent } from "./Pages/home/home.component";
import { BlueSectionComponent } from "./Sections/blue-section/blue-section.component";
import { ProyectosComponent } from "./Sections/proyectos/proyectos.component";
import { ServiciosComponent } from "./Sections/servicios/servicios.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, HomeComponent, BlueSectionComponent, ProyectosComponent, ServiciosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'NexaPage';
}
