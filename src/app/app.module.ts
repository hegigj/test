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
    AgeDirective
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatListModule,
        MatButtonModule,
        MatIconModule
    ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'en'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
