import { Component, HostListener, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Project } from '../interfaces/project';
import { Company } from '../interfaces/company';

declare function html2pdf(elem: any): void;

@Component({
    moduleId: module.id,
    selector: 'info-form',
    templateUrl: '../templates/form.html'
})

export class FormComponent implements OnInit {
    data: any = {
        education: {},
        companies: [],
        skills: {
            left: [{title:'', level: 1}],
            right: [{title:'', level: 1}]
        }
    };

    constructor(private router: Router) {}

    ngOnInit() {
        let company = new Company();
        let project = new Project();

        company.projects.push(project);
        this.data['companies'].push(company);
    }

    render() {
        let people = JSON.parse(localStorage.getItem('people') || '[]');
        people.push(this.data);
        localStorage.setItem('people', JSON.stringify(people));

        let index = people.length - 1;
        const url = this.router
            .createUrlTree(['pdf', index])
            .toString();

        this.router.navigateByUrl(url);
    }
}