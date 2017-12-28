import { Type, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injector } from '@angular/core';
import { Resolve } from '@angular/router';
import { ReflectiveInjector } from '@angular/core';

declare var Reflect: any;

/**
 * Convert service to resolve type
 * @param serviceTypes Dependency injection types
 * @param resolve Resolve.resolve method
 */
export function service2Resolve<TResult>(
  serviceTypes: Type<any> | Type<any>[],
  resolve: (
    services: any[],
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) => TResult | Observable<TResult> | Promise<TResult>
) {
  return class TempResolve implements Resolve<any> {
    public services = [];
    constructor() {
      let types = serviceTypes;
      if (!(types instanceof Array)) {
        types = [types];
      }
      const injector = service2Resolve['injector'];
      types.forEach(element => {
        this.services.push(injector.get(element));
      });
    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      return resolve(this.services, route, state);
    }
  };
}
