export class RouteLink {
    constructor(public path: string, 
              public name: string, 
              public activo: number, 
              public submenu: boolean, 
              public children?: Array<RouteLink>) {  }
  }