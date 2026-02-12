import { Component, HostListener } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-header',
  imports: [FooterComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }
}
