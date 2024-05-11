import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogData } from '../interfaces/dialogData';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})

export class PopupComponent {

  constructor(
    dialogRef: MatDialogRef<PopupComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: DialogData) 
  {

  }

}
