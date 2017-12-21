import { Routes } from '@angular/router';
import { Type } from '@angular/core';

export function findResolves(routes: Routes): any[] {
  console.log(routes);
  return routes
    .filter(x => x.resolve)
    .map(x => x.resolve)
    .map(x => {
      const result = [];
      for (const prop in x) {
        if (!x.hasOwnProperty(prop)) {
          continue;
        }
        if (/.+Resolve$/.test(x[prop].name || '')) {
          result.push(x[prop]);
        }
      }
      return result;
    })
    .reduce((pre, curr) => {
      return curr.concat(pre);
    }, []);
}
