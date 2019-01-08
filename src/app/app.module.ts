import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { TodosComponent } from './todos/todos.component';

import { appRouterModule } from './routes/app.routes';
import { FilterProductsPipe } from './pipes/filter-products.pipe';
import { SortProductsPipe } from './pipes/sort-products.pipe';
import { ProductOneComponent } from './product-one/product-one.component';
import { TodoItemComponent } from './todo-item/todo-item.component';

import { TodoService } from './services/todo.service';
import { ProductsService } from './services/products.service';
import { SampleComponent } from './sample/sample.component';
import { SampleDirective } from './directives/sample.directive';
import { BikeService } from './services/bike.service';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { ViewRegistrationComponent } from './components/view-registration/view-registration.component';
import { CallbackComponent } from './components/callback/callback.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    TodosComponent,
    FilterProductsPipe,
    SortProductsPipe,
    ProductOneComponent,
    TodoItemComponent,
    SampleComponent,
    SampleDirective,
    AdminComponent,
    HomeComponent,
    ViewRegistrationComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule, FormsModule, appRouterModule, HttpClientModule, ReactiveFormsModule
  ],
  providers: [
    TodoService, ProductsService, BikeService, AuthService, AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
