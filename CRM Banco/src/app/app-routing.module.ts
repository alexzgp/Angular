import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormProductComponent } from './form-product/form-product.component';
import { PageClientesComponent } from './pages/page-clientes/page-clientes.component';
import { PageGestoresCreateComponent } from './pages/page-gestores-create/page-gestores-create.component';
import { PageGestoresDetailComponent } from './pages/page-gestores-detail/page-gestores-detail.component';
import { PageGestoresComponent } from './pages/page-gestores/page-gestores.component';
import { PageProductDetailComponent } from './pages/page-product-detail/page-product-detail.component';
import { PageProductsComponent } from './pages/page-products/page-products.component';
import { TravelListComponent } from './travel-list/travel-list.component';

const routes: Routes = [
  { path: '', component: TravelListComponent },
  { path: 'products', component: PageProductsComponent },
  { path: 'products/create', component: FormProductComponent },
  { path: 'products/:id', component: PageProductDetailComponent }, 
  { path: 'users', component: PageProductDetailComponent }, 
  { path: 'users/:id', component: PageProductDetailComponent }, 
  { path: 'gestores', component: PageGestoresComponent },
  { path: 'clientes', component: PageClientesComponent },
  { path: 'gestores/:id', component: PageGestoresDetailComponent },
  { path: 'gestores/create', component: PageGestoresDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
