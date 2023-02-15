import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { ProductCardComponent } from './home/product-card/product-card.component';

const routes: Routes = [
  // {path:'', redirectTo: 'products', pathMatch: 'full'},
  // {path:'products', component: ProductCardComponent},
  // {path: 'cart', component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
