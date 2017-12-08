import { Component, OnInit } from '@angular/core';
import { SidebarService } from './sidebar.service';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';

declare var $:any;

export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: 'table', title: 'Home',  icon:'ti-view-list-alt', class: '' },
    { path: 'user', title: 'Perfil',  icon:'ti-user', class: '' }
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    auth: any;

    constructor(private sidebarService: SidebarService,
        private route: ActivatedRoute, private router: Router) { }

    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
        console.log(this.menuItems);

        
    }
    isNotMobileMenu(){
        if($(window).width() > 991){
            return false;
        }
        return true;
    }

    logout(){
        this.sidebarService.auth().
            subscribe(auth => {
                this.auth = auth;
                this.sidebarService.logout(this.auth[0].id).
                    subscribe();
        });
    }

}
