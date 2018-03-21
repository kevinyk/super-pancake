import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AuthorsListComponent } from './authors-list/authors-list.component';
import { AuthorsNewComponent } from './authors-new/authors-new.component';
import { AuthorsEditComponent } from './authors-edit/authors-edit.component';

import { HttpService } from "./http.service";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { QuotesComponent } from './quotes/quotes.component';
import { QuotesNewComponent } from './quotes-new/quotes-new.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthorsListComponent,
    AuthorsNewComponent,
    AuthorsEditComponent,
    QuotesComponent,
    QuotesNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
