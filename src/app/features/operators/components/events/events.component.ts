import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  template: `
    <div>
      <app-list listTitle="Recently Visited">
        <app-list-item [name]="'map'"></app-list-item>
        <app-list-item [name]="'scan'"></app-list-item>
        <app-list-item [name]="'filter'"></app-list-item>
        <app-list-item [name]="'from'"></app-list-item>
        <app-list-item [name]="'create'"></app-list-item>
      </app-list>
    </div>
  `,
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
