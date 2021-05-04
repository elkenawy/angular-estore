import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { WishlistComponent } from './account/wishlist/wishlist.component';

import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';


import { ErrorComponent } from './error/error.component';

import { BlogLeftSidebarComponent } from './blog/blog-left-sidebar/blog-left-sidebar.component';

import { BlogDetailsComponent } from './blog/blog-details/blog-details.component';


const routes: Routes = [

  { 
    path: 'login', 
    component: LoginComponent 
  },
  { 
    path: 'register', 
    component: RegisterComponent 
  },
 
  { 
    path: '404', 
    component: ErrorComponent 
  },

  { 
    path: 'blog', 
    component: BlogLeftSidebarComponent 
  },
  
  { 
    path: 'blog/:slug',
    component: BlogDetailsComponent 
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
