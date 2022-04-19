import {AfterViewInit, Component, OnInit, ViewEncapsulation} from '@angular/core';

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
  constructor() {
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
  }

  ngOnInit(): void {}

  edit(id: number): void {
    console.log('Edit id:', id);
  }

  delete(id: number): (arg: number) => void {
    console.log('Delete id:', id);
    return (arg) => console.log('Delete id:', arg);
  }
}
