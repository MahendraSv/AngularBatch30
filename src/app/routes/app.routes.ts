import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './../products/products.component';
import { TodosComponent } from './../todos/todos.component';
import { ProductOneComponent } from './../product-one/product-one.component';
import { SampleComponent } from './../sample/sample.component';
import { AdminComponent } from './../components/admin/admin.component';
import { HomeComponent } from '../components/home/home.component';
import { ViewRegistrationComponent } from '../components/view-registration/view-registration.component';
import { CallbackComponent } from '../components/callback/callback.component';
import { AuthGuard } from '../services/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'admin/view/:id',
    component: ViewRegistrationComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'callback',
    component: CallbackComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'todos',
    component: TodosComponent
  },
  {
    path: 'todosOne',
    component: ProductOneComponent
  },
  {
    path: 'sample',
    component: SampleComponent
  }
];

export const appRouterModule = RouterModule.forRoot(routes);
