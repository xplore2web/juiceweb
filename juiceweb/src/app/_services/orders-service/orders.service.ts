import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {BaseService} from 'app/_services/base.service';

@Injectable()
export class OrdersService  extends BaseService {
    private OrdersServiceUrl = this.getWebServicesUrl();
    private OrderUrl = "Order";
    
 constructor(private http: Http) {
        super();
    }
    getOrdersByUserId(Order: any): Promise<any> {
        const url = `${this.OrdersServiceUrl}/${this.OrderUrl}`;
        return this.http.get(url, this.jwt())
            .toPromise()
            .then(response => response.json() as any)
            .catch(this.handleErrorSignin);
    }
    getOrdersByDate(Order: any): Promise<any> {
        const url = `${this.OrdersServiceUrl}/${this.OrderUrl}`;
        return this.http.get(url, this.jwt())
            .toPromise()
            .then(response => response.json() as any)
            .catch(this.handleErrorSignin);
    }
    PlaceOrder(Order: any): Promise<any> {
        const url = `${this.OrdersServiceUrl}/${this.OrderUrl}`;
        return this.http.get(url, this.jwt())
            .toPromise()
            .then(response => response.json() as any)
            .catch(this.handleErrorSignin);
    }
}
