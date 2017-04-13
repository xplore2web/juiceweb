import { Routes, RouterModule } from '@angular/router';
import { MySignupComponent} from 'app/_components/my-signup/my-signup.component';
import { MyNewComponent} from 'app/_components/my-new/my-new.component';
import {HomepageComponent} from 'app/_components/homepage/homepage.component';
import {OrderComponent} from 'app/_components/order/order.component';
import {EmployeeComponent} from 'app/_components/employee/employee.component';
import {DashboardComponent} from 'app/_components/dashboard/dashboard.component';
import {SignupComponent} from 'app/_components/signup/signup.component';
import {LoginComponent} from 'app/_components/login/login.component';
import { MenuComponent } from './_components/menu/menu.component';
import { AboutComponent } from './_components/about/about.component';
import { ProductsComponent } from './_components/products/products.component';


// Route config let's you map routes to components
const routes: Routes = [
  // map '/persons' to the people list component
  {
    path: 'home',
    component: HomepageComponent,
  },
   {
    path: 'signup',
    component: MySignupComponent,
  },
   {
    path: 'login',
    component: LoginComponent,
  },
    {
    path: 'menu',
    component: MenuComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

export const routing = RouterModule.forRoot(routes);

