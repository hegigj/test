import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DatePipe} from "@angular/common";
import { HighlightDirective } from './highlight.directive';
import { AddRandomEmojiPipe } from './add-random-emoji.pipe';
import { ItemComponent } from './item/item.component';
import { FormComponent } from './form/form.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { PostComponent } from './post/post.component';
import { KthPipe } from './kth.pipe';
import { AgeDirective } from './age.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import { EventCreateEditModalComponent } from './event-create-edit-modal/event-create-edit-modal.component';
import {SimpleDialogService} from "./simple-dialog.service";
import {SharedModule} from "./shared/shared.module";
import { StudentsComponent } from './students/students.component';
import { StudentComponent } from './students/student/student.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    AddRandomEmojiPipe,
    ItemComponent,
    FormComponent,
    HeaderComponent,
    ContentComponent,
    PostComponent,
    KthPipe,
    AgeDirective,
    EventCreateEditModalComponent,
    StudentsComponent,
    StudentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
    SimpleDialogService,
    {
      provide: LOCALE_ID,
      useValue: 'en'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
