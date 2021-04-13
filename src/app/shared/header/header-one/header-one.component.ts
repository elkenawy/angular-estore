import { Component, OnInit, Input, HostListener, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header-one',
  templateUrl: './header-one.component.html',
  styleUrls: ['./header-one.component.scss']
})
export class HeaderOneComponent implements OnInit, OnDestroy {

  @Input() class: string;
  @Input() themeLogo = 'assets/images/icon/logo.png'; // Default Logo
  @Input() topbar = true; // Default True
  @Input() sticky = false; // Default false
  isAuthenticated = false;
  private userSub: Subscription;

  public stick = false;

  constructor(private authService: AuthService) {

   }


  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
      console.log(!user);
      console.log(!!user);
    });
  }

 // @HostListener Decorator
  @HostListener('window:scroll', [])
  onWindowScroll() {
  const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  if (number >= 150 && window.innerWidth > 400) {
    this.stick = true;
  } else {
    this.stick = false;
  }
 }


  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }


 
}
