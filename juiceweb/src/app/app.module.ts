import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
import {HttpTestService} from 'app/_services/http-service/http-test.service';
import {HeroService} from 'app/_services/Hero-service/Hero.service';
import {DashService} from 'app/_services/dashboard-service/dash.service';
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
import { OffersComponent } from './_components/offers/offers.component';
import { OrderstatusComponent } from './_components/orderstatus/orderstatus.component';
import { TcComponent } from './_components/tc/tc.component';
import { HelpComponent } from './_components/help/help.component';

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
    ForgotpassComponent,
    OffersComponent,
    OrderstatusComponent,
    TcComponent,
    HelpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [Http,HttpTestService,HeroService,DashService],
  bootstrap: [AppComponent]
})
export class AppModule { }
