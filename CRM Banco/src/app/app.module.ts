import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { MenuComponent } from './menu/menu.component';
import { ButtonComponent } from './button/button.component';
import { TravelListComponent } from './travel-list/travel-list.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { FormProductComponent } from './form-product/form-product.component';
import { FormFieldComponent } from './form-field/form-field.component';
import { FormButtonComponent } from './form-button/form-button.component';
import { TableComponent } from './table/table.component';
import { PageProductsComponent } from './pages/page-products/page-products.component';
import { PageProductDetailComponent } from './pages/page-product-detail/page-product-detail.component';
import { PageUsersComponent } from './pages/page-users/page-users.component';
import { PageGestoresComponent } from './pages/page-gestores/page-gestores.component';
import { PageGestoresDetailComponent } from './pages/page-gestores-detail/page-gestores-detail.component';
import { FormGestorComponent } from './form-gestor/form-gestor.component';
import { PageGestoresCreateComponent } from './pages/page-gestores-create/page-gestores-create.component';
import { PageClientesComponent } from './pages/page-clientes/page-clientes.component';
import { PageTransferenciasComponent } from './pages/page-transferencias/page-transferencias.component';
import { PageClientesCreateComponent } from './pages/page-clientes-create/page-clientes-create.component';
import { FormClienteComponent } from './form-cliente/form-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    MenuComponent,
    ButtonComponent,
    TravelListComponent,
    ProductListComponent,
    FormProductComponent,
    FormFieldComponent,
    FormButtonComponent,
    TableComponent,
    PageProductsComponent,
    PageProductDetailComponent,
    PageUsersComponent,
    PageGestoresComponent,
    PageGestoresDetailComponent,
    FormGestorComponent,
    PageGestoresCreateComponent,
    PageClientesComponent,
    PageTransferenciasComponent,
    PageClientesCreateComponent,
    FormClienteComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
