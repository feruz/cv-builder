import { Component, HostListener, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'cvbuilder-app',
    templateUrl: '../templates/layout.html'
})

export class AppComponent  {


    constructor(private router: Router) {}

}