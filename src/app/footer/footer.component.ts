import { Component, OnInit, AfterViewInit } from '@angular/core';

import {lazyload} from 'src/assets/js/lazyload.js';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    let lazyloadModule = new lazyload();
    lazyloadModule.init();
  }
}
