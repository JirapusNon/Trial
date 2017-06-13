import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MdButtonModule, MdCheckboxModule, MaterialModule } from '@angular/material';
// import { NoopAnimationsModule } from '@angular/platform-browser/animations';
//import 'hammerjs';/

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
    // BrowserAnimationsModule,
    // MdButtonModule,
    // MdCheckboxModule,
    // MaterialModule,
    // NoopAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
