import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blue-section',
  imports: [CommonModule],
  templateUrl: './blue-section.component.html',
  styleUrl: './blue-section.component.css'
})
export class BlueSectionComponent implements AfterViewInit {
  @ViewChild('blueVideo') videoRef!: ElementRef<HTMLVideoElement>;
  showPlayButton = true;

  ngAfterViewInit(): void {
    // Asegurar que el video esté listo después de que la vista se inicialice
    setTimeout(() => {
      if (this.videoRef?.nativeElement) {
        const video = this.videoRef.nativeElement;
        video.load();
      }
    }, 200);
  }

  playVideo(): void {
    if (this.videoRef?.nativeElement) {
      const video = this.videoRef.nativeElement;
      
      // Reproducir con sonido (el usuario hizo clic, así que está permitido)
      video.muted = false;
      const playPromise = video.play();
      
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log('Error al reproducir:', error);
        });
      }
    }
  }

  onVideoPlay(): void {
    this.showPlayButton = false;
  }

  onVideoPause(): void {
    this.showPlayButton = true;
  }
}
