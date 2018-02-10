import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryDataService } from './services/category-data.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [CategoryDataService]
})
export class CoreModule { }
