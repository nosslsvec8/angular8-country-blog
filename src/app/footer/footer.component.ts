import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss', '../app.global.scss']
})
export class FooterComponent implements OnInit {

  title = 'Test task';

  constructor() { }

  ngOnInit() {
  }

}
