import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isScrolled = false;
  menuAbierto = false; // <-- Controla si el menú móvil está abierto o cerrado

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  // Abre o cierra el menú al tocar las 3 rayitas
  toggleMenu() {
    this.menuAbierto = !this.menuAbierto;
  }

  // Cierra el menú automáticamente cuando el usuario toca un link
  cerrarMenu() {
    this.menuAbierto = false;
  }
}