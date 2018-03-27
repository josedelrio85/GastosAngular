import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouteLink } from '../Modelos/RouteLink';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  routes = new Array<RouteLink>();

  constructor(private router: Router) { }

  ngOnInit() {
    for (var i = 0; i < this.router.config.length; i++) {
      var routePath:string = this.router.config[i].path;
      var namePath:string = this.router.config[i].data.name;
      var activoPath: number = this.router.config[i].data.activo;
      var subMenuPath: boolean = this.router.config[i].data.submenu;
      

      if(subMenuPath){
        let children : any[] = this.router.config[i].children;
        let submenus: RouteLink[] = [];
        children.forEach((v,k) => {
          submenus.push(new RouteLink(v.path, v.data.name, v.data.activo, v.data.submenu));
        });
        this.routes.push(new RouteLink(routePath, namePath, activoPath, subMenuPath, submenus));
      }else{
        this.routes.push(new RouteLink(routePath, namePath, activoPath, subMenuPath));
      }
    }
  }
}

