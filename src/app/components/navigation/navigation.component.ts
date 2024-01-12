import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  constructor(private router: Router) { }

  navigateToHome() {
    this.router.navigate(['/']);
  }

  navigateToExpertise() {
    this.router.navigate(['/expertise']);
  }

  navigateToGitHub() {
    this.router.navigate(['/github']);
  }

  navigateToContact() {
    this.router.navigate(['/contact']);
  }
  
}
