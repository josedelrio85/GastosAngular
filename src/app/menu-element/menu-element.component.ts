import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { RouteLink } from '../Modelos/RouteLink';

@Component({
  selector: 'app-menu-element',
  templateUrl: './menu-element.component.html',
  styleUrls: ['./menu-element.component.css']
})

export class MenuElementComponent implements OnInit {

  @Input() ruta: RouteLink;
  @Input() targetNavbar: ElementRef;
  
  constructor(private router: Router) {}

  ngOnInit() {}

  collapseMenu(){
    this.targetNavbar.nativeElement.className = "navbar-collapse collapse";
  }
}
