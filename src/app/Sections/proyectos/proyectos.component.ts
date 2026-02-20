import { Component, ViewChild, ElementRef, AfterViewInit, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  imports: [],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent implements AfterViewInit {
  @ViewChild('slider') slider!: ElementRef;
  @ViewChildren('projectVideo') videos!: QueryList<ElementRef<HTMLVideoElement>>;
  currentSlide = 0;
  totalSlides = 2;

  ngAfterViewInit(): void {
    this.updateSlider();
    this.setupVideoAutoplay();
  }

  nextSlide(): void {
    if (this.currentSlide < this.totalSlides - 1) {
      this.currentSlide++;
      this.updateSlider();
      this.handleVideoPlayback();
    }
  }

  previousSlide(): void {
    if (this.currentSlide > 0) {
      this.currentSlide--;
      this.updateSlider();
      this.handleVideoPlayback();
    }
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
    this.updateSlider();
    this.handleVideoPlayback();
  }

  private setupVideoAutoplay(): void {
    // Reproducir el primer video si está activo
    setTimeout(() => {
      this.handleVideoPlayback();
    }, 300);
  }

  private handleVideoPlayback(): void {
    this.videos.forEach((videoRef, index) => {
      const video = videoRef.nativeElement;
      if (index === this.currentSlide) {
        // Reproducir el video activo
        video.play().catch(() => {
          // Si falla el autoplay, no hacer nada (el usuario puede hacer clic)
        });
      } else {
        // Pausar los videos inactivos
        video.pause();
        video.currentTime = 0; // Reiniciar al inicio
      }
    });
  }

  private updateSlider(): void {
    if (this.slider?.nativeElement) {
      const slides = this.slider.nativeElement.querySelectorAll('.video-slide');
      const dots = document.querySelectorAll('.dot');
      
      slides.forEach((slide: Element, index: number) => {
        (slide as HTMLElement).classList.toggle('active', index === this.currentSlide);
      });

      dots.forEach((dot, index: number) => {
        (dot as HTMLElement).classList.toggle('active', index === this.currentSlide);
      });

      const translateX = -this.currentSlide * 100;
      this.slider.nativeElement.style.transform = `translateX(${translateX}%)`;
    }
  }
}
