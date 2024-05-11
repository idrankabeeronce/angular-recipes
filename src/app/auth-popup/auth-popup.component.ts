import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-auth-popup',
  templateUrl: './auth-popup.component.html',
  styleUrls: ['./auth-popup.component.scss']
})
export class AuthPopupComponent implements OnInit {
  submitInProgress: boolean = false;
  authFormGroup: FormGroup;

  constructor(private dialogRef: MatDialogRef<AuthPopupComponent>) { 
    this.authFormGroup = new FormGroup({
        "login": new FormControl("", [
            Validators.required
        ]),
        "password": new FormControl("", [
            Validators.required
        ])
    });
  }

  ngOnInit(): void {
  }

  submit():void {
    console.log(this.authFormGroup);
    
    this.submitInProgress = true;
    // this.dialogRef.close();
  }

}
