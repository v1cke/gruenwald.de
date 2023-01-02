import { Component, OnInit } from '@angular/core';
import VanillaTilt from 'vanilla-tilt';
import * as AOS from 'aos';

@Component({
  selector: 'app-mywork',
  templateUrl: './mywork.component.html',
  styleUrls: ['./mywork.component.scss']
})
export class MyworkComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
    this.VanillaTiltValues();
  }
  
  VanillaTiltValues(){
    VanillaTilt.init(document.querySelectorAll('.vanillaTilt') as any,{
      reverse: true,
      max:5,
      scale: 1.05,
      speed: 400,
      perspective: 1000,
    });
  }
}
