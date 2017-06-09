import {Routes, RouterModule} from '@angular/router';
import {MySignupComponent} from 'app/_components/my-signup/my-signup.component';
import {HomepageComponent} from 'app/_components/homepage/homepage.component';
import {OrderComponent} from 'app/_components/order/order.component';
import {EmployeeComponent} from 'app/_components/employee/employee.component';
import {DashboardComponent} from 'app/_components/dashboard/dashboard.component';
import {LoginComponent} from 'app/_components/login/login.component';
import {MenuComponent} from './_components/menu/menu.component';
import {AboutComponent} from './_components/about/about.component';
import {ProductsComponent} from './_components/products/products.component';
import {ContactComponent} from './_components/contact/contact.component';
import {SuperadminComponent} from './_components/superadmin/superadmin.component';
import {ShopadminComponent} from './_components/shopadmin/shopadmin.component';
import {ForgotpassComponent} from './_components/forgotpass/forgotpass.component';
import {FranchisehpComponent} from './_components/franchisehp/franchisehp.component';
import {OffersComponent} from './_components/offers/offers.component';
import {OrderstatusComponent} from './_components/orderstatus/orderstatus.component';
import {TcComponent} from './_components/tc/tc.component';
import {HelpComponent} from './_components/help/help.component';

// Route config let's you map routes to components
const routes: Routes = [
    // map '/persons' to the people list component
    {
        path: 'home',
        component: HomepageComponent,
    },
    {
        path: 'offers',
        component: OffersComponent,
    },
    {
        path: 'help',
        component: HelpComponent,
    },
    {
        path: 'orderstatus',
        component: OrderstatusComponent,
    },
    {
        path: 'tc',
        component: TcComponent,
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
        path: 'contact',
        component: ContactComponent,
    },
    {
        path: 'superadmin',
        component: SuperadminComponent,
    },
    {
        path: 'shopadmin',
        component: ShopadminComponent,
    },
    {
        path: 'forgotpass',
        component: ForgotpassComponent,
    },
    {
        path: 'franchisehp',
        component: FranchisehpComponent,
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: '**', redirectTo: '/home'
    }
];

export const routing = RouterModule.forRoot(routes);

