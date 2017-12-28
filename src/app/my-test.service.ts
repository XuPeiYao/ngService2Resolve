import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
@Injectable()
export class MyTestService {
  constructor() { console.log("TT") }

  getTime() {
    console.log('TEST');
    return new Date();
  }
}

@Injectable()
export class ValueService {
  constructor(private client: HttpClient) { }
  getValue() {
    return this.client.get('assets/data.json');
  }
}

@Injectable()
export class ValueResolve implements Resolve<any> {
  constructor(private service: ValueService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.service.getValue();
  }

}

