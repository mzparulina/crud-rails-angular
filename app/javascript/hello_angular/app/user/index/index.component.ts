import {Component, OnInit } from "@angular/core";

import templateString from "./index.component.html";

@Component({
	selector: "users",
	template: templateString,
})

export class UserIndexComponent implements OnInit {
  constructor() { ... }

  ngOnInit() { ... }
}