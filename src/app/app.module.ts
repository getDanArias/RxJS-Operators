import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { OperatorsComponent } from './features/operators/operators/operators.component';
import { FormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [
    AppComponent,
    OperatorsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
