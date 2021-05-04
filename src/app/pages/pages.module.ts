import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryModule } from '@ks89/angular-modal-gallery';
import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages-routing.module';


import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';


import { CompareOneComponent } from './compare/compare-one/compare-one.component';
import { CompareTwoComponent } from './compare/compare-two/compare-two.component';

import { ErrorComponent } from './error/error.component';

// Blog Components
import { BlogLeftSidebarComponent } from './blog/blog-left-sidebar/blog-left-sidebar.component';
import { BlogDetailsComponent } from './blog/blog-details/blog-details.component';
// Portfolio Components


@NgModule({
  declarations: [

    LoginComponent,
    RegisterComponent,
    CompareOneComponent,
    CompareTwoComponent,
    ErrorComponent,
    BlogLeftSidebarComponent,
    BlogDetailsComponent,
  ],
  imports: [
    CommonModule,
    GalleryModule.forRoot(),
    SharedModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
