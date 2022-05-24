import {AfterViewInit, Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import {SimpleDialogService} from "./simple-dialog.service";
import {ItemComponent} from "./item/item.component";

interface Data {
  firstName: string;
  lastName: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  users: Data[];

  list: number[] = [1,2,3,4,5,6,7,8,9,10];

  constructor(simpleService: SimpleDialogService) {
    this.users = [
      {
        firstName: 'Hegi',
        lastName: 'Gjoka'
      },
      {
        firstName: 'Hegi 1',
        lastName: 'Gjoka'
      },
      {
        firstName: 'Hegi 2',
        lastName: 'Gjoka'
      }
    ];

    simpleService.open(ItemComponent, { name: 'Hegi' })
  }

  ngOnInit(): void {}

  edit(id: number): void {
    console.log('Edit id:', id);
  }

  delete(id: number): void {
    console.log('Delete id:', id);
  }
}
