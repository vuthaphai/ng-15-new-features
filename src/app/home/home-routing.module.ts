import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { MyLinkComponent } from './my-link/my-link.component';
import { NgoptimizedImageDirectiveComponent } from './ngoptimized-image-directive/ngoptimized-image-directive.component';

const routes: Routes = [{
  path:'',component: HomeComponent
},
{
  path: 'my-link', component: MyLinkComponent
},
{
  path: 'image-directive', component: NgoptimizedImageDirectiveComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
