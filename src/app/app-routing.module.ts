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
import { MyTestService } from './my-test.service';
import { service2Resolve } from './service2resolve/service2resolve';

const timeResolve = service2Resolve(
  [MyTestService],
  (services, route, state) => {
    return services[0].getTime();
  }
);

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MyTestComponent,
    resolve: {
      time: timeResolve
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [timeResolve],
  exports: [RouterModule]
})
export class AppRoutingModule {}
