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
  totalSlides = 3; // <--- Ahora son 3

  ngAfterViewInit(): void {
    this.updateSlider();
  }

  nextSlide(): void {
    if (this.currentSlide < this.totalSlides - 1) {
      this.currentSlide++;
      this.updateSlider();
    }
  }

  previousSlide(): void {
    if (this.currentSlide > 0) {
      this.currentSlide--;
      this.updateSlider();
    }
  }

  goToSlide(index: number): void {
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