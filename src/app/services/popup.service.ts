import { Injectable } from '@angular/core';
import { PopupComponent } from '../popup/popup.component';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../interfaces/dialogData';
import { AuthPopupComponent } from '../auth-popup/auth-popup.component';

interface obKeyMap {
  [key:string] : string;
}

@Injectable({
  providedIn: 'root'
})
export class PopupService {
  obTitle:obKeyMap = {
    ['default']: 'Title',
    ['auth']: 'Authorization',
  };

  obContent:obKeyMap = {
    ['default']: 'Content',
    ['auth']: 'Content will be soon',
  };
  
  constructor(private dialog : MatDialog) 
  {}
  
  open(type:string = '') {
    let data: DialogData = {
      title: this.mapObject(this.obTitle, type),
      content: this.mapObject(this.obContent, type),
    }
    this.dialog.open(PopupComponent, {data: data});
  }

  openAuth() {
    this.dialog.open(AuthPopupComponent);
  }
  
  mapObject(obKeys:obKeyMap, type:string) {
    if (obKeys[type] === undefined)
      return obKeys['default'];

    return obKeys[type];
  }
}
