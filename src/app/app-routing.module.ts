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
import { MyTestService, ValueService } from './my-test.service';
import { service2Resolve } from './service2resolve';
import { findResolves } from './service2resolve';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MyTestComponent,
    resolve: {
      time: service2Resolve([MyTestService], (services, route, state) => {
        return services[0].getTime();
      }),
      value: service2Resolve([ValueService], services => {
        return (services[0] as ValueService).getValue();
      })
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: findResolves(routes),
  exports: [RouterModule]
})
export class AppRoutingModule {}
