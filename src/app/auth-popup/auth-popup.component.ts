import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActionData } from '../interfaces/actionData';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-popup',
  templateUrl: './auth-popup.component.html',
  styleUrls: ['./auth-popup.component.scss']
})
export class AuthPopupComponent implements OnInit {
  submitInProgress: boolean = false;
  authFormGroup: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<AuthPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public actionData: ActionData,
    public router: Router) 
  { 
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
    this.dialogRef.addPanelClass('c-popup-overlay');
    this.dialogRef.afterClosed().subscribe((e) => {
      if(this.actionData) {
        if(this.actionData.action === 'returnURL') {
          this.router.navigateByUrl(this.actionData.actionParam);
        }
      }
    });
  }

  submit():void {   
    if (!this.authFormGroup.valid) return;
    this.submitInProgress = true;
    
  }

}
