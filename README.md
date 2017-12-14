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
// Import function
import { service2Resolve } from 'ng-service2resolve';

// Create Resolve from Service
const timeResolve = service2Resolve(MyTestService, (service, route, state) => {
  return service.getTime();
});

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MyTestComponent,
    resolve: {
      time: timeResolve //Add Routing Resolve
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [timeResolve], // Add Providers
  exports: [RouterModule]
})
export class AppRoutingModule {}
```
