//import { Injectable } from '@angular/core';
//
//@Injectable()
//export class DashService {
//
//  constructor() { }
//
//}
import { Injectable } from '@angular/core';
import {Hero} from 'app/hero';
import {HEROES} from 'app/mock-heroes';
@Injectable()
export class DashService {
    
    getHeroes():Promise<Hero[]>{
        return Promise.resolve(HEROES);
    }
    

  constructor() { }

}

