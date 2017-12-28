import { NgModule, Injectable, Type } from '@angular/core';
import {
  Routes,
  RouterModule,
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { MyTestComponent } from './my-test/my-test.component';
import { MyTestService, ValueService, ValueResolve } from './my-test.service';
import { service2Resolve } from './service2resolve/service2resolve';
import { Service2ResolveModule } from './service2resolve/service2resolve.module';

// deceive AOT compiler `Function calls are not supported in decorators` problem
export let timeResolve = null, valueResolve = null;

// use service2Resolve function create Resolve class
timeResolve = service2Resolve([MyTestService], (services, route, state) => {
  return services[0].getTime();
});
valueResolve = service2Resolve([ValueService], services => {
  return (services[0] as ValueService).getValue();
});


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MyTestComponent,
    resolve: {
      time: timeResolve,
      value: valueResolve
    }
  }
];

@NgModule({
  imports: [
    Service2ResolveModule, // very important!
    RouterModule.forRoot(routes)
  ],
  providers: [MyTestService, ValueService, valueResolve, timeResolve],
  exports: [RouterModule]
})
export class AppRoutingModule { }
