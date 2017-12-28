import { Routes } from '@angular/router';
import { Type } from '@angular/core';

/**
 * get all ResolveType, but not support AOT
 * @param routes routing configure
 */
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
        if (x[prop] instanceof Function) {
          result.push(x[prop]);
        }
      }
      return result;
    })
    .reduce((pre, curr) => {
      return curr.concat(pre);
    }, []);
}
