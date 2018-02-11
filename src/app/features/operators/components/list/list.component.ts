import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-list',
  template: `
    <div [ngClass]="listClass">
      <h2 [ngClass]="listClass + '-header'">{{ listTitle }}</h2>
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnChanges {

  @Input() listTitle: string;
  @Input() kind: string;

  listClass: string;

  ngOnChanges() {
    switch (this.kind) {
      case 'category':
        this.listClass = 'category-list';
        break;
      case 'operator':
        this.listClass = 'operator-list';
        break;
      default:
        this.listClass = 'category-list';
        break;
    }
  }

}
