import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // اضافه کردن این خط
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // اضافه کردن این ماژول
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }