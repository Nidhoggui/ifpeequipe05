import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlunoJuanComponent } from './aluno-juan/aluno-juan.component';

@NgModule({
  declarations: [
    AppComponent,
    AlunoJuanComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
