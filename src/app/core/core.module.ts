import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreService } from './services/store.service';
import { RecentEventsService } from './services/recent-events.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    StoreService,
    RecentEventsService
  ]
})
export class CoreModule { }
