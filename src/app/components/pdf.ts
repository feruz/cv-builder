import { Component, HostListener, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Project } from '../interfaces/project';
import { Company } from '../interfaces/company';

declare function html2pdf(elem: any, conf: any): void;

@Component({
    moduleId: module.id,
    selector: 'pdf-renderer',
    templateUrl: '../templates/pdf.html'
})

export class PdfComponent implements OnInit {
    data: any = {};

    constructor(private router: Router,
                private activatedRoute: ActivatedRoute,) {}

    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            let index = params['index'];
            let people = JSON.parse(localStorage.getItem('people') || '[]');

            if(!people[index]) {
                this.router.navigate(['/']);
                return;
            } else {
                this.data = people[index];
            }
        });
    }

    generate() {
        let element = document.getElementById('pdf-page');
        html2pdf(element, {
            margin:       [10, 0, 10, 0],
            filename:     this.data.name + '.pdf',
            image:        { type: 'png', quality: 1 },
            html2canvas:  { dpi: 192, letterRendering: true }
        });
    }
}
