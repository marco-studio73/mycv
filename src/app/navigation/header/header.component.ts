import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();

  fileUrl;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {

    const data = '../../../../api/public/mycv/assets/documents/cv.pdf';
    const blob = new Blob([data], { type: 'application/octet-stream' });

    this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));

  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

}
