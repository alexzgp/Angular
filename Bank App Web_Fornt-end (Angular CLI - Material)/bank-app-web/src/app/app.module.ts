import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { SidebarComponent } from './components/level-1/sidebar/sidebar.component';
import { TableComponent } from './components/level-1/table/table.component';
import { FormsModule } from '@angular/forms';
import { FormButtonComponent } from './components/level-2/form-button/form-button.component';
import { PageManagersComponent } from './pages/page-managers/page-managers.component';
import { PageClientsComponent } from './pages/page-clients/page-clients.component';
import { PageManagerDetailsComponent } from './pages/page-manager-details/page-manager-details.component';
import { HttpClientModule } from '@angular/common/http';
import { NavMovilComponent } from './components/level-1/nav-movil/nav-movil.component';
import { FormManagerComponent } from './components/level-1/form-manager/form-manager.component';
import { FormClientComponent } from './components/level-1/form-client/form-client.component';
import { PageClientDetailComponent } from './pages/page-client-detail/page-client-detail.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TableComponent,
    FormButtonComponent,
    PageManagersComponent,
    PageClientsComponent,
    PageManagerDetailsComponent,
    NavMovilComponent,
    FormManagerComponent,
    FormClientComponent,
    PageClientDetailComponent,
    PageHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
