import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';


@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
  styles: [
    `
      .descIsMobile{
        flex-direction: column !important;
      }

      .imgMobile{
        height:110px
      }
    `
  ]
})
export class AboutMeComponent implements OnInit {

  isMobile : Boolean;
  isTablette: Boolean;
  classDisplayed: {};
  imgMobileDisplayed: {};

  constructor(private deviceService: DeviceDetectorService) { }

  defineDevice() {
    this.isMobile = this.deviceService.isMobile();
    this.isTablette = this.deviceService.isTablet();
    console.log(this.isMobile);
    console.log(this.isTablette);
    if (this.isMobile){
      this.classDisplayed = {
        descIsMobile: true,
        
      };
      this.imgMobileDisplayed = {
        imgMobile: true,
      }
    }
  }

  ngOnInit() {

    this.defineDevice();

  }

}
