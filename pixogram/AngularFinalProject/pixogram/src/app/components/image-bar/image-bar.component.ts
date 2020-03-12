import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-bar',
  templateUrl: './image-bar.component.html',
  styleUrls: ['./image-bar.component.css']
})
export class ImageBarComponent implements OnInit {
  user: Object;
  constructor() { }

  ngOnInit(): void {
  }

}
