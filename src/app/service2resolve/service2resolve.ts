import { Type, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

declare var Reflect: any;
export function service2Resolve<TService, TResult>(
  serviceType: Type<TService>,
  resolve: (
    service: TService,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) => TResult | Observable<TResult> | Promise<TResult>
) {
  const __decorate =
    (this && this.__decorate) ||
    function(decorators, target, key, desc) {
      const c = arguments.length;
      let r =
          c < 3
            ? target
            : desc === null
              ? (desc = Object.getOwnPropertyDescriptor(target, key))
              : desc,
        d = null;
      if (
        typeof Reflect === 'object' &&
        typeof Reflect.decorate === 'function'
      ) {
        r = Reflect.decorate(decorators, target, key, desc);
      } else {
        for (let i = decorators.length - 1; i >= 0; i--) {
          if ((d = decorators[i])) {
            r =
              (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
          }
        }
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
  const __metadata =
    (this && this.__metadata) ||
    function(k, v) {
      if (
        typeof Reflect === 'object' &&
        typeof Reflect.metadata === 'function'
      ) {
        return Reflect.metadata(k, v);
      }
    };

  return (function() {
    function TempResolve(service) {
      this.service = service;
      this.resolve = function(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
      ) {
        return resolve(service, route, state);
      };
    }
    return __decorate(
      [Object(Injectable)(), __metadata('design:paramtypes', [serviceType])],
      TempResolve
    );
  })();
}
