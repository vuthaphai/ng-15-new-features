import { Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { AuthComponent } from './auth/auth.component';

export const APP_ROUTE: Routes = [
    {path: '', redirectTo: 'blog', pathMatch:'full'},
    // {path: 'blog', component: BlogComponent, loadChildren: () => import('./blog/blog.route').then((m) => m.BLOG_ROUTE)},
    {path: 'blog', component: BlogComponent, loadChildren: () => import('./blog/blog.route')},
    {path: 'auth', component: AuthComponent, loadChildren: () => import('./auth/auth.route').then(m=>m.AUTH_ROUTE)},
];


