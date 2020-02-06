import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', '../app.global.scss']
})
export class HeaderComponent implements OnInit {

  title = 'Countries of the World';

  constructor() { }

  ngOnInit() {
  }

}
