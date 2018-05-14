import { RouterModule, Routes, PreloadAllModules } from '@angular/router';


// --- Main pages
import { FormComponent } from './components/form';
import { PdfComponent } from './components/pdf';

const routing: Routes = [
    { path: '', component: FormComponent },
    { path: 'pdf/:index', component: PdfComponent },

    // --- otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routes = RouterModule.forRoot(routing, {
    preloadingStrategy: PreloadAllModules
});