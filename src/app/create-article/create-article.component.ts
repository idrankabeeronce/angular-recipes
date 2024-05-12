import { Component, OnInit } from '@angular/core';
import { PopupService } from '../services/popup.service';
import { ActionData } from '../interfaces/actionData';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss']
})
export class CreateArticleComponent implements OnInit {
  currentUser: boolean;

  constructor(
    private popupService: PopupService,
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {
    this.currentUser = this.userService.isAuth();
  }

  ngOnInit(): void {    
    if (!this.currentUser) {
      let actionData:ActionData = {
        action: 'returnURL',
        actionParam: this.activatedRoute.snapshot.queryParamMap.get('returnURL') 
          ? String(this.activatedRoute.snapshot.queryParamMap.get('returnURL'))
          : '/'
      };
      this.popupService.openAuth(actionData);
    }
  }

}
