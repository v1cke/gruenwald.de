import { Component, OnInit, HostListener } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent implements OnInit {

  mouseX: any;
  mouseY: any;
  windowWidth: number = 833;
  showLight: boolean = true;

  constructor(private service: ServicesService) {}

  ngOnInit(): void {
  }

/**
 * assign window width
 *
 * @param event - window data
 */
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    // this.windowWidth = event.target.innerWidth

  }


/**
 * assign the mouse coordinates
 *
 * @param e - mouse move data
 */
  onMouseMove(e: any) {
    this.mouseX = e.pageX;
    this.mouseY = e.pageY;
    console.log(this.mouseX, this.mouseY);
    
    // this.showBackLight();
   }

}
