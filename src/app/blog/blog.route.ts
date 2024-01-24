import { Route } from "@angular/router";
import { DocsComponent } from "./docs/docs.component";
import { AboutComponent } from "./about/about.component";

// export const BLOG_ROUTE: Route[] = [
//     { path: 'home', component: HomeComponent},
//     { path: 'docs', component: DocsComponent},
//     { path: 'about', component: AboutComponent},
// ]
export default [
    // { path: 'home', component: HomeComponent},
    {path: '', redirectTo:'home', pathMatch: 'full'},
    { path: 'home', loadComponent:() => import('./home/home.component').then(c => c.HomeComponent)}, // lazyload component
    { path: 'docs', component: DocsComponent},
    { path: 'about', component: AboutComponent},
] as Route[]