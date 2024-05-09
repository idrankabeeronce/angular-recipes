import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import {lazyload} from 'src/assets/js/lazyload.js';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, AfterViewInit {
  subscriptionFormGroup: FormGroup;
  submitInProgress = false;
  submitSuccess = false;
  
  constructor() {
    this.subscriptionFormGroup = new FormGroup({
        "email": new FormControl("", [
            Validators.required, 
            Validators.email 
        ])
    });
   }

  ngOnInit(): void {
  }

  submitSubscription() {
    this.submitInProgress = true;
    // toDo: api
    
    // onSuccess:    
    setTimeout(() => {
      this.submitInProgress = false;
      this.submitSuccess = true;
    }, 3000)
    
  }
  ngAfterViewInit() {
    let lazyloadModule = new lazyload();
    lazyloadModule.init();
  }
}
