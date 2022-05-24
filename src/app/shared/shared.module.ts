import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import { CardComponent } from './components/card/card.component';
import {MatCardModule} from "@angular/material/card";



@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    CardComponent,
    MatListModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class SharedModule { }
