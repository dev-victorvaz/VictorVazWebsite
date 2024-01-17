import { Component, Renderer2, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  private myElement!: HTMLElement;
  private mobileMenuToggler:boolean = false;

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit(): void {
    this.myElement = this.el.nativeElement.querySelector('#myElementId');
  }

  toggleMobileMenu():void {
    if (this.mobileMenuToggler) {
      this.hideElement();
    }
    else {
      this.showElement();
    }
    this.mobileMenuToggler = !this.mobileMenuToggler;
  }
  /*
  // Show the element
  showElement():void {
    this.renderer.setStyle(this.myElement, 'display', 'flex');
  }

  // Hide the element
  hideElement():void {
    this.renderer.setStyle(this.myElement, 'display', 'none');
  }
  */

  showElement() {
    this.renderer.removeClass(this.myElement, 'mobile-hidden');
  }
  
  // Hide the element
  hideElement() {
    this.renderer.addClass(this.myElement, 'mobile-hidden');
  }


}
