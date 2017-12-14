import { Injectable } from '@angular/core';

@Injectable()
export class MyTestService {
  constructor() {}
  getTime() {
    console.log('TEST');
    return new Date();
  }
}
