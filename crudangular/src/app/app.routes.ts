import { Routes } from '@angular/router';
import { HomeComponent } from '../app/components/home/home.component';
import { IncludeProductsComponent } from '../app/components/include-products/include-products.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'incluir', component: IncludeProductsComponent },

];
