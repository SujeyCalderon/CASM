import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { directorioComponent } from './modules/directorio/directorio.component';
export const routes: Routes = [
    {path: "", redirectTo: "home", pathMatch: 'full'},
    {path: "home", component: HomeComponent},
    {path: "directorio", component: directorioComponent}

];