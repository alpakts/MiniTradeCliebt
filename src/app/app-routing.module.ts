import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './admin/layout/layout.component';
import { BasketsComponent } from './ui/components/baskets/baskets.component';
import { HomeComponent } from './ui/components/home/home.component';
import { ProductsComponent } from './ui/components/products/products.component';
import { UiComponent } from './ui/ui/ui.component';

const routes: Routes = [
  {
    path: 'admin',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./admin/main-components/dashboard/dashboard.module').then(
            (module) => module.DashboardModule
          ),
      },
      {
        path: 'customers',
        loadChildren: () =>
          import('./admin/main-components/customers/customers.module').then(
            (module) => module.CustomersModule
          ),
      },
      {
        path: 'orders',
        loadChildren: () =>
          import('./admin/main-components/orders/orders.module').then(
            (module) => module.OrdersModule
          ),
      },
      {
        path: 'products',
        loadChildren: () =>
          import('./admin/main-components/products/products.module').then(
            (module) => module.ProductsModule
          ),
      },
    ],
  },
  {
    path: '',
    component: UiComponent,children:[
      {path:"",component:HomeComponent},
      {path:"baskets",loadChildren:()=>import("./ui/components/baskets/baskets.module").then(module=>
        module.BasketsModule)},
        {path:"products",loadChildren:()=>import("./ui/components/products/products.module").then(module=>
          module.ProductsModule)}
        
    ]
  },
  { path: 'baskets', component: BasketsComponent },
  { path: 'products', component: ProductsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
