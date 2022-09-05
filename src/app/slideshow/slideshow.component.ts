import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {
  images = ['gaming_then.jpg', 'gaming_now.jpg', 'gaming_future.jpg'];
  headlines = [
    'when gaming began',
    'the age of esport',
    'the future is virtual'
  ];
  currentImage = 0;
  currentHeadline = 0;
  showImage = true;

  constructor() { }

  ngOnInit(): void {
    this.updateImage();
  }

  updateImage() {
    setInterval(() => {
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length;
      this.showImage = false;

      setTimeout(() => {
        this.showImage = true;
      }, 5);
    }, 5000);
  }

}
