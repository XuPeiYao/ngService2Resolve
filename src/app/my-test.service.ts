import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class MyTestService {
  constructor() {}

  getTime() {
    console.log('TEST');
    return new Date();
  }
}

@Injectable()
export class ValueService {
  constructor(private client: HttpClient) {}
  getValue() {
    return this.client.get('assets/data.json');
  }
}
