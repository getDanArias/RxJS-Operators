import { Component, Input, OnInit } from '@angular/core';
import { RecentEventsService } from '../../../../core/services/recent-events.service';

@Component({
  selector: 'app-events',
  template: `
    <div *ngIf="events.length > 0">
      <app-list listTitle="Recently Visited" [headerHexColor]="headerHexColor">
        <app-list-item *ngFor="let event of events" [name]="event"></app-list-item>
      </app-list>
    </div>
  `,
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  @Input() title: string;
  @Input() headerHexColor: string;

  events: string[] = [];

  constructor(private recentEventsService: RecentEventsService) { }

  ngOnInit() {
    this.recentEventsService.getRecentlyVisited()
      .subscribe((event: string) => {
        const _events = this.events.filter(e => e !== event).splice(0, 4);
        _events.unshift(event);
        this.events = [..._events];
      });
  }

}
