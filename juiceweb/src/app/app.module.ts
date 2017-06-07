import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { SignupComponent } from './_components/signup/signup.component';
import { HeaderComponent } from './_components/header/header.component';
import { LoginComponent } from './_components/login/login.component';
import { MySignupComponent } from './_components/my-signup/my-signup.component';
import { AdminComponent } from './_components/admin/admin.component';
import { HomepageComponent } from './_components/homepage/homepage.component';
import { OrderComponent } from './_components/order/order.component';
import {routing} from 'app/routes';
import {Http} from '@angular/http';
import { EmployeeComponent } from './_components/employee/employee.component';
import { DashboardComponent } from './_components/dashboard/dashboard.component';
import { FooterComponent } from './_components/footer/footer.component';
import { MenuComponent } from './_components/menu/menu.component';
import { AboutComponent } from './_components/about/about.component';
import { ProductsComponent } from './_components/products/products.component';
import { ContactComponent } from './_components/contact/contact.component';
import { SuperadminComponent } from './_components/superadmin/superadmin.component';
import { ShopadminComponent } from './_components/shopadmin/shopadmin.component';
import { FranchisehpComponent } from './_components/franchisehp/franchisehp.component';
import { ForgotpassComponent } from './_components/forgotpass/forgotpass.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    HeaderComponent,
    LoginComponent,
    MySignupComponent,
    AdminComponent,
    HomepageComponent,
    OrderComponent,
    EmployeeComponent,
    DashboardComponent,
    FooterComponent,
    MenuComponent,
    AboutComponent,
    ProductsComponent,
    ContactComponent,
    SuperadminComponent,
    ShopadminComponent,
    FranchisehpComponent,
    ForgotpassComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ReactiveFormsModule 
  ],
  providers: [Http],
  bootstrap: [AppComponent]
})
export class AppModule { }
