import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryModule } from '@ks89/angular-modal-gallery';
import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages-routing.module';

// Pages Components
// import { WishlistComponent } from './account/wishlist/wishlist.component';
// import { CartComponent } from './account/cart/cart.component';
// import { DashboardComponent } from './account/dashboard/dashboard.component';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
// import { ForgetPasswordComponent } from './account/forget-password/forget-password.component';
// import { ProfileComponent } from './account/profile/profile.component';
// import { ContactComponent } from './account/contact/contact.component';
// import { CheckoutComponent } from './account/checkout/checkout.component';

import { CompareOneComponent } from './compare/compare-one/compare-one.component';
import { CompareTwoComponent } from './compare/compare-two/compare-two.component';

import { ErrorComponent } from './error/error.component';

// Blog Components
import { BlogLeftSidebarComponent } from './blog/blog-left-sidebar/blog-left-sidebar.component';
// import { BlogRightSidebarComponent } from './blog/blog-right-sidebar/blog-right-sidebar.component';
// import { BlogNoSidebarComponent } from './blog/blog-no-sidebar/blog-no-sidebar.component';
import { BlogDetailsComponent } from './blog/blog-details/blog-details.component';
// Portfolio Components


@NgModule({
  declarations: [
    // WishlistComponent,
    // CartComponent,
    // DashboardComponent,
    LoginComponent,
    RegisterComponent,
    // ForgetPasswordComponent,
    // ProfileComponent,
    // ContactComponent,
    // CheckoutComponent,

    CompareOneComponent,
    CompareTwoComponent,

    ErrorComponent,

    BlogLeftSidebarComponent,
    // BlogRightSidebarComponent,
    // BlogNoSidebarComponent,
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
