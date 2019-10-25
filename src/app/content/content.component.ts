import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  options = {
    bottom: 0,
    fixed: true,
    top: 64
  };

  constructor() {}

  ngOnInit() {
  }

}
