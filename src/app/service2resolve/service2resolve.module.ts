import { NgModule, Injector } from '@angular/core';
import { service2Resolve } from './service2resolve';

@NgModule({
  imports: [],
  exports: []
})
export class Service2ResolveModule {
  constructor(public injector: Injector) {
    service2Resolve['injector'] = injector;
  }

}
