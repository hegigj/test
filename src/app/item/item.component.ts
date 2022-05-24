import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {Payload} from "../form/form.component";
import {SIMPLE_DIALOG_DATA, SimpleDialogService} from "../simple-dialog.service";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  @Input()
  id!: number;

  amount: number;

  @Input('delete')
  onDelete!: (id: number) => void

  @Output('edit')
  onEdit: EventEmitter<number>;

  constructor(@Inject(SIMPLE_DIALOG_DATA) data: any) {
    this.amount = 5;

    setTimeout(() => console.log(data), 1000);

    this.onEdit = new EventEmitter<number>();
  }

  edit(): void {
    this.onEdit.emit(this.id);
  }

  delete(): void {
    this.onDelete(this.id);
  }
}
