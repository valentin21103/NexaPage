import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blue-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blue-section.component.html',
  styleUrl: './blue-section.component.css'
})
export class BlueSectionComponent {
  showPlayButton = true;

  // Solo esta función para "darle vida" a Blue
  activarVideo(): void {
    this.showPlayButton = false;
  }
}