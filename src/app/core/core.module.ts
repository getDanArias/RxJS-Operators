import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryDataService } from './services/category-data.service';
import { RecentEventsService } from './services/recent-events.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    CategoryDataService,
    RecentEventsService
  ]
})
export class CoreModule { }
