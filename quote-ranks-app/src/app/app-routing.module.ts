import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorsListComponent } from './authors-list/authors-list.component';
import { AuthorsNewComponent } from './authors-new/authors-new.component';
import { AuthorsEditComponent } from './authors-edit/authors-edit.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuotesNewComponent } from './quotes-new/quotes-new.component';

const routes: Routes = [
  {path: '', component: AuthorsListComponent},
  {path: 'new', component: AuthorsNewComponent},
  {path: 'edit/:id', component: AuthorsEditComponent},
  {path: 'quotes/:id', component: QuotesComponent},
  {path: 'write/:id', component: QuotesNewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
