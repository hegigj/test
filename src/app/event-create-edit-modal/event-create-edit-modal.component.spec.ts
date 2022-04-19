import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCreateEditModalComponent } from './event-create-edit-modal.component';

describe('EventCreateEditModalComponent', () => {
  let component: EventCreateEditModalComponent;
  let fixture: ComponentFixture<EventCreateEditModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventCreateEditModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventCreateEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
