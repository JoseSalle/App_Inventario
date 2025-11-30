import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-parallax',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="parallax-container" [style.height]="height">
      <div class="parallax-bg" [style.background-image]="'url(' + imageUrl + ')'"></div>
      <div class="parallax-content">
        <ng-content></ng-content>
      </div>
    </div>
  `,
    styles: [`
    .parallax-container {
      position: relative;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .parallax-bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
      z-index: -1;
      filter: brightness(0.6); /* Darken image for better text readability */
    }
    .parallax-content {
      position: relative;
      z-index: 1;
      color: white;
      text-align: center;
      width: 100%;
    }
  `]
})
export class ParallaxComponent {
    @Input() imageUrl: string = '';
    @Input() height: string = '300px';
}
