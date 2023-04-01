import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  buttonIcon = 'assets/icons/menu.svg';
  openMenu = false;
  constructor(public cdr: ChangeDetectorRef, public breakpointObserver: BreakpointObserver,
    private router: Router) { }

  ngOnInit(): void {
    this.breakpointObserver
      .observe(['(min-width: 768px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches && this.openMenu) {
          this.openCloseMenu();
        } 
        this.cdr.detectChanges();
      });
  }
  openCloseMenu() {
    this.openMenu = !this.openMenu;
    if (!this.openMenu) {
      this.buttonIcon = 'assets/icons/menu.svg';
      document.body.style.setProperty('overflow', 'auto');
    } else {
      document.body.style.setProperty('overflow', 'hidden');
      this.buttonIcon = 'assets/icons/close.svg';
    }
  }

  goHomePage() {
    this.router.navigateByUrl('/recipes').then(() => {
      this.router.navigate(['/'])
    })
  }
}
