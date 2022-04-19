import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  @Input()
  firstName?: string;

  @Input()
  lastName?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
