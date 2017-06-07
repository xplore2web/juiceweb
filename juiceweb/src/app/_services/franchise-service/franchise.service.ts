import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {BaseService} from 'app/_services/base.service';

@Injectable()
export class FranchiseService extends BaseService {
    private franchiseServiceUrl = this.getWebServicesUrl();
    private franchiseUrl = "franchise";

  constructor(private http: Http) {
        super();
    }
    getAllFranchise(franchise: any): Promise<any> {
        const url = `${this.franchiseServiceUrl}/${this.franchiseUrl}`;
        return this.http.get(url, this.jwt())
            .toPromise()
            .then(response => response.json() as any)
            .catch(this.handleErrorSignin);
    }

getFranchiseById(franchise: any): Promise<any> {
        const url = `${this.franchiseServiceUrl}/${this.franchiseUrl}`;
        return this.http.get(url, this.jwt())
            .toPromise()
            .then(response => response.json() as any)
            .catch(this.handleErrorSignin);
    }
    saveFranchise(franchise: any): Promise<any> {
        const url = `${this.franchiseServiceUrl}/${this.franchiseUrl}`;
        return this.http.get(url, this.jwt())
            .toPromise()
            .then(response => response.json() as any)
            .catch(this.handleErrorSignin);
    }
     editFranchise(franchise: any): Promise<any> {
        const url = `${this.franchiseServiceUrl}/${this.franchiseUrl}`;
        return this.http.get(url, this.jwt())
            .toPromise()
            .then(response => response.json() as any)
            .catch(this.handleErrorSignin);
    }
     deleteFranchise(franchise: any): Promise<any> {
        const url = `${this.franchiseServiceUrl}/${this.franchiseUrl}`;
        return this.http.get(url, this.jwt())
            .toPromise()
            .then(response => response.json() as any)
            .catch(this.handleErrorSignin);
    }
}
