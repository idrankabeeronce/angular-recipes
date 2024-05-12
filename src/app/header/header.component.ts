import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { HostListener } from '@angular/core';
import { PopupService } from '../services/popup.service';
import { UserService } from '../services/user.service';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  buttonIcon = 'assets/icons/menu.svg';
  openMenu = false;
  lastScrollTop = 0;
  menuTopOffset = 0;
  headerMaxHeight = 0;
  currentUser: boolean;
  currentObUser: User | null;

  private topStartPoint = 240;

  headerTopMenu = [
    {
      title: 'Recipes',
      href: 'recipes'
    },
    {
      title: 'Categories',
      href: 'categories'
    }
  ];

  constructor(
    public cdr: ChangeDetectorRef,
    public breakpointObserver: BreakpointObserver,
    private router: Router,
    private popupService: PopupService,
    private userService: UserService
  ) {
      this.currentUser = this.userService.isAuth();
      this.currentObUser = this.currentUser ? this.userService.getUser() : null;
    }

  ngOnInit(): void {
    this.breakpointObserver
      .observe(['(min-width: 768px)'])
      .subscribe((state: BreakpointState) => {
        this.menuTopOffset = 0;
        if (state.matches && this.openMenu) {
          this.triggerMenu();
        } 
        this.cdr.detectChanges();
      });

    this.headerMaxHeight = 64;
  }

  triggerMenu() {
    this.openMenu = !this.openMenu;
    const header = document.querySelector('.header');
    this.menuTopOffset = 0;

    if (!header) return;

    if (!this.openMenu) {
      header.classList.remove('opened');
      document.body.style.setProperty('overflow', 'auto');
    } else {
      header.classList.add('opened');
      document.body.style.setProperty('overflow', 'hidden');
    }
  }

  triggerAuthPopup() {
    // toDo: if user authorized open prodile page
    this.popupService.openAuth();
  }

  @HostListener("window:scroll", []) 
  onWindowScroll() {
    const windowWidth = window.innerWidth;
    
    const verticalOffset = window.pageYOffset 
      || document.documentElement.scrollTop 
      || document.body.scrollTop || 0;

    if (windowWidth > 768) return;
    if (!this.headerMaxHeight) return;

    if (this.lastScrollTop > verticalOffset) {
      if (this.menuTopOffset > 0)
        this.menuTopOffset += verticalOffset - this.lastScrollTop;

      if (this.menuTopOffset < 0)
        this.menuTopOffset = 0;
    } else {
      
      if (verticalOffset > this.topStartPoint) {
        if (this.menuTopOffset < this.headerMaxHeight)
          this.menuTopOffset += verticalOffset - this.lastScrollTop;

        if (this.menuTopOffset > this.headerMaxHeight)
          this.menuTopOffset = this.headerMaxHeight;
      }
    }

    this.lastScrollTop = verticalOffset;
  }

  getUrl() {    
    return this.router.url    
  }
}
