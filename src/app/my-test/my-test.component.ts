import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-test',
  templateUrl: './my-test.component.html',
  styleUrls: ['./my-test.component.css']
})
export class MyTestComponent implements OnInit {
  constructor(private _route: ActivatedRoute) {
    console.log(this._route.snapshot.data.value);
  }

  ngOnInit() {}
}
