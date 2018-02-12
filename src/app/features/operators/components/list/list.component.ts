import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  template: `
    <div [ngClass]="listClass">
      <h2 [ngStyle]="styles" [ngClass]="listClass + '-header'">{{ listTitle }}</h2>
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() listTitle: string;
  @Input() kind: string;
  @Input() headerHexColor: string;

  listClass: string;

  styles = {};

  ngOnInit() {

    if (this.headerHexColor) {

      let cleanHeaderHexColor = this.headerHexColor;

      if (cleanHeaderHexColor[0] === '#') {
        const headerHexColorArray = Array.from(cleanHeaderHexColor);
        headerHexColorArray.shift();
        cleanHeaderHexColor = headerHexColorArray.join('');
      }

      this.styles = {...{backgroundColor: `#${cleanHeaderHexColor}`}};

    }

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
