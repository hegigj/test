import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output, SimpleChanges,
  ViewChild
} from '@angular/core';

export interface Payload {
  name: string;
  amount: number;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, OnChanges, AfterViewInit {
  @Input('nameControl')
  name?: string;

  @Input()
  amount?: number;

  @ViewChild('nameControlRef')
  nameControl!: ElementRef<HTMLInputElement>;

  @ViewChild('amountControlRef')
  amountControl!: ElementRef<HTMLInputElement>;

  @Output()
  addedItem: EventEmitter<Payload>;

  constructor() {
    this.addedItem = new EventEmitter<Payload>();
  }

  ngOnInit(): void {
    console.log(this.nameControl);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  ngAfterViewInit(): void {
    console.log(this.nameControl);
  }

  add(event: any) {
    event.preventDefault();
    const name: string = this.nameControl.nativeElement.value;
    const amount: number = this.amountControl.nativeElement.value as any;

    if (name && amount) {
      this.nameControl.nativeElement.value = '';
      this.amountControl.nativeElement.value = '';

      this.addedItem.emit({
        name: name,
        amount: amount
      });
    }
  }
}
