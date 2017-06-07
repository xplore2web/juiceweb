import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {BaseService} from 'app/_services/base.service';

@Injectable()
export class JuiceService extends BaseService {
    private JuiceServiceUrl = this.getWebServicesUrl();
    private JuiceUrl = "Juice";

  constructor(private http: Http) {
        super();
    }
    getAllItems(Juice: any): Promise<any> {
        const url = `${this.JuiceServiceUrl}/${this.JuiceUrl}`;
        return this.http.get(url, this.jwt())
            .toPromise()
            .then(response => response.json() as any)
            .catch(this.handleErrorSignin);
    }
        getAllItemsbyFranchiseid(Juice: any): Promise<any> {
        const url = `${this.JuiceServiceUrl}/${this.JuiceUrl}`;
        return this.http.get(url, this.jwt())
            .toPromise()
            .then(response => response.json() as any)
            .catch(this.handleErrorSignin);
    }
        SaveItems(Juice: any): Promise<any> {
        const url = `${this.JuiceServiceUrl}/${this.JuiceUrl}`;
        return this.http.get(url, this.jwt())
            .toPromise()
            .then(response => response.json() as any)
            .catch(this.handleErrorSignin);
    }
        DeleteItems(Juice: any): Promise<any> {
        const url = `${this.JuiceServiceUrl}/${this.JuiceUrl}`;
        return this.http.get(url, this.jwt())
            .toPromise()
            .then(response => response.json() as any)
            .catch(this.handleErrorSignin);
    }
        EditItems(Juice: any): Promise<any> {
        const url = `${this.JuiceServiceUrl}/${this.JuiceUrl}`;
        return this.http.get(url, this.jwt())
            .toPromise()
            .then(response => response.json() as any)
            .catch(this.handleErrorSignin);
    }
        SearchJuice(Juice: any): Promise<any> {
        const url = `${this.JuiceServiceUrl}/${this.JuiceUrl}`;
        return this.http.get(url, this.jwt())
            .toPromise()
            .then(response => response.json() as any)
            .catch(this.handleErrorSignin);
    }
    Ratings(Juice: any): Promise<any> {
        const url = `${this.JuiceServiceUrl}/${this.JuiceUrl}`;
        return this.http.get(url, this.jwt())
            .toPromise()
            .then(response => response.json() as any)
            .catch(this.handleErrorSignin);
    }
    GetRatings(Juice: any): Promise<any> {
        const url = `${this.JuiceServiceUrl}/${this.JuiceUrl}`;
        return this.http.get(url, this.jwt())
            .toPromise()
            .then(response => response.json() as any)
            .catch(this.handleErrorSignin);
    }
    
}
