import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from "@angular/router";

@Component({
  selector: 'app-packs',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink, RouterModule],
  templateUrl: './packs.component.html',
  styleUrl: './packs.component.css'
})
export class PacksComponent {
  mostrarIndividuales: boolean = false; 

cambiarVista() {
    this.mostrarIndividuales = !this.mostrarIndividuales;
  }
  
}