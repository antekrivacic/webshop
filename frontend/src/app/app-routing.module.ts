import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { ItemPageComponent } from './components/pages/item-page/item-page.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';
import { authGuard } from './auth/guards/auth.guard';
import { PaymentPageComponent } from './components/pages/payment-page/payment-page.component';
import { OrderTrackPageComponent } from './components/pages/order-track-page/order-track-page.component';
import { OrdersComponent } from './components/pages/orders/orders.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { DashboardPageComponent } from './components/pages/dashboard-page/dashboard-page.component';
import { ReviewsPageComponent } from './components/pages/reviews-page/reviews-page.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'search/:searchTerm', component: HomeComponent},
  {path: 'tag/:tag', component: HomeComponent},
  {path: 'item/:id', component: ItemPageComponent},
  {path: 'cart-page', component: CartPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'register', component: RegisterPageComponent},
  {path: 'checkout', component: CheckoutPageComponent, canActivate: [authGuard]},
  {path: 'payment', component: PaymentPageComponent, canActivate: [authGuard]},
  {path: 'track/:orderId', component: OrderTrackPageComponent, canActivate: [authGuard]},
  {path: 'orders', component: OrdersComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [authGuard]},
  {path: 'dashboard', component: DashboardPageComponent, canActivate: [authGuard]},
  {path: 'reviews', component: ReviewsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
