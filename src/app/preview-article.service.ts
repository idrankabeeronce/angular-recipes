import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreviewArticleService {

  private previewItem = new BehaviorSubject<any>({})

  constructor() { }

  public getPreviewItem(): Observable<any> {
    return this.previewItem.asObservable();
  }
  public setPreviewItem(value:any) {
    this.previewItem.next(value)
  }
}
