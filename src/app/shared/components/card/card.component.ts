import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Output()
  onEdit: EventEmitter<void>;

  @Output()
  onDelete: EventEmitter<void>;

  constructor() {
    this.onEdit = new EventEmitter<void>();
    this.onDelete = new EventEmitter<void>();
  }

  ngOnInit(): void {
  }

  edit(): void {
    this.onEdit.emit();
  }

  delete(): void {
    this.onDelete.emit();
  }
}
