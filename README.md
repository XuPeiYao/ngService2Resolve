# NgService2Resolve

[![npm version](https://badge.fury.io/js/ng-service2resolve.svg)](https://badge.fury.io/js/ng-service2resolve)
[![Downloads](https://img.shields.io/npm/dm/ng-service2resolve.svg)](https://www.npmjs.com/package/ng-service2resolve)
[![license](https://img.shields.io/github/license/xupeiyao/ngService2Resolve.svg)](https://github.com/XuPeiYao/ngService2Resolve/blob/master/LICENSE)

Simple way convert Service to Resolve.

## Install

```bash
npm install ng-service2resolve
```

## Getting Started

```typescript
// Import method and function
import {  Service2ResolveModule, service2Resolve } from './service2resolve';

// deceive AOT compiler, fix `Function calls are not supported in decorators` problem
export let timeResolve = null, valueResolve = null;

// use service2Resolve function create Resolve class
timeResolve = service2Resolve([MyTestService], (services, route, state) => {
  return services[0].getTime();
});

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MyTestComponent,
    resolve: {
      time: timeResolve //Add Routing Resolve,
      time2: service2Resolve(//this way not support AOT. If use this way, you can use findResolves function get all Resolve of routes
        [MyTestService],
        (services, route, state) => {
          return services[0].getTime();
        }
      )
    }
  }
];


@NgModule({
  imports: [
    Service2ResolveModule, // very important!
    RouterModule.forRoot(routes)
  ],
  providers: [findResolves(routes), timeResolve], // findResolves function NOT SUPPORT AOT
  exports: [RouterModule]
})
export class AppRoutingModule {}
```
