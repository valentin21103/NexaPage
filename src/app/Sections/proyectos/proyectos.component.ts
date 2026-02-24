import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent implements AfterViewInit {
  @ViewChild('slider') slider!: ElementRef;
  currentSlide = 0;
  totalSlides = 6; 

  ngAfterViewInit(): void {
    this.updateSlider();
  }

  // --- FUNCIÓN MÁGICA PARA DETENER VIDEOS ---
  stopVideos() {
    // Busca todos los iframes con la clase 'project-video'
    const iframes = document.querySelectorAll('iframe.project-video');
    iframes.forEach(iframe => {
      // Envía el comando de pausa a YouTube
      (iframe as HTMLIFrameElement).contentWindow?.postMessage(
        '{"event":"command","func":"pauseVideo","args":""}', 
        '*'
      );
    });
  }

  nextSlide(): void {
    if (this.currentSlide < this.totalSlides - 1) {
      this.stopVideos(); // <--- Pausa antes de cambiar
      this.currentSlide++;
      this.updateSlider();
    }
  }

  previousSlide(): void {
    if (this.currentSlide > 0) {
      this.stopVideos(); // <--- Pausa antes de cambiar
      this.currentSlide--;
      this.updateSlider();
    }
  }

  goToSlide(index: number): void {
    this.stopVideos(); // <--- Pausa antes de cambiar
    this.currentSlide = index;
    this.updateSlider();
  }

  private updateSlider(): void {
    if (this.slider?.nativeElement) {
      const translateX = -this.currentSlide * 100;
      this.slider.nativeElement.style.transform = `translateX(${translateX}%)`;
    }
  }
}