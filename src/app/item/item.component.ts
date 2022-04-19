import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Payload} from "../form/form.component";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  @Input()
  id!: number;

  name: string;
  amount: number;

  @Input('delete')
  onDelete!: (id: number) => void

  @Output('edit')
  onEdit: EventEmitter<number>;

  constructor() {
    this.name = 'Item 1';
    this.amount = 5;

    this.onEdit = new EventEmitter<number>();
  }

  edit(): void {
    this.onEdit.emit(this.id);
  }

  delete(): void {
    this.onDelete(this.id);
  }
}
