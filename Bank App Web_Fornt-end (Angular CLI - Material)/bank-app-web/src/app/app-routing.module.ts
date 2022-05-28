import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormClientComponent } from './components/level-1/form-client/form-client.component';
import { FormManagerComponent } from './components/level-1/form-manager/form-manager.component';
import { PageClientDetailComponent } from './pages/page-client-detail/page-client-detail.component';
import { PageClientsComponent } from './pages/page-clients/page-clients.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageManagerDetailsComponent } from './pages/page-manager-details/page-manager-details.component';
import { PageManagersComponent } from './pages/page-managers/page-managers.component';

const routes: Routes = [
  { 
    path: '',
    component: PageHomeComponent
  },
  { 
    path: 'managers', 
    component: PageManagersComponent 
  },
  { path: 'managers/create', component: FormManagerComponent },
  { 
    path: 'managers/:id', 
    component: PageManagerDetailsComponent 
  },
  { 
    path: 'clients', 
    component: PageClientsComponent 
  },
  { path: 'clients/create', component: FormClientComponent },
  { 
    path: 'clients/:id', 
    component: PageClientDetailComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
