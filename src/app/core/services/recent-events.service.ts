import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RecentEventsService {

  private recentlyVisited: string[];

  constructor() { }

  addRecentlyVisited(visit: string) {
    this.recentlyVisited.push(visit);
  }

  getRecentlyVisited() {
    return Observable.from(this.recentlyVisited);
  }

}
