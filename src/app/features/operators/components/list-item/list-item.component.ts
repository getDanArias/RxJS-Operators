import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-item',
  template: `
    <div
      [ngClass]="styles"
    >
      <span>{{ name }}</span>
      <span *ngIf="count !== undefined">{{ count }}</span>
    </div>
  `,
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit, OnChanges {

  @Input() type: string;
  @Input() name;
  @Input() count?;
  @Input() active;

  styles = {};
  activeClass: string;
  itemClass: string;

  ngOnInit() {

  }

  ngOnChanges() {

    switch (this.type) {
      case 'category':
        this.activeClass = 'active';
        this.itemClass = 'category-item';
        break;
      case 'operator':
        this.activeClass = 'activeOperator';
        this.itemClass = 'operator-item';
        break;
      default:
        this.itemClass = 'category-item';
        break;
    }

    this.styles[this.itemClass] = true;
    this.styles[this.activeClass] = this.active;
  }

}
