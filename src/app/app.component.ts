import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'gruenwald.de';
  images = ['gaming_then.jpg','gaming_now.jpg','gaming_future.jpg'];
  currentImage = 0;
  showImage = true;

  ngOnInit() {
    this.updateImage();
  }


  updateImage(){
    setInterval(()=> {
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length;
      this.showImage = false;

      setTimeout(() => {
        this.showImage = true;
      }, 5);
    }, 5000);
  }







}
