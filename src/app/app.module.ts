import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from './not-found/not-found.component';  //ngmodule tu wystepuje 
import { StudentNewComponent } from './student-new/student-new.component';
@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    StudentEditComponent,
    NotFoundComponent,
    StudentNewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
