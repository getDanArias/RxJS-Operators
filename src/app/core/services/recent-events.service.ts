import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RecentEventsService {

  recentlyVisited: string[] = [];

  recentlyVisitedStream = new Subject();

  constructor() { }

  addRecentlyVisited(visit: string) {
    this.recentlyVisited.push(visit);
    this.recentlyVisitedStream.next(visit);
  }

  getRecentlyVisited() {
    return this.recentlyVisitedStream;
  }

}
