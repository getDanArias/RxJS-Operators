import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { OperatorsModule } from './features/operators/operators.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    OperatorsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
