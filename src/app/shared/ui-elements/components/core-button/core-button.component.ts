import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-core-button',
  template: `
    <div (mouseover)="onMouseOver()"
         (mouseleave)="onMouseLeave()"
         [ngStyle]="styles" class="core-button">
      {{ name }}
    </div>
  `,
  styleUrls: ['./core-button.component.scss']
})
export class CoreButtonComponent implements OnInit {

  @Input() bgColor: string;
  @Input() fontColor: string;
  @Input() name: string;

  styles = {
    backgroundColor: '',
    color: ''
  };

  defaultColor = `#E4007C`;
  defaultFontColor = '#FFF';

  constructor() { }

  ngOnInit() {
    if (this.bgColor) {
      this.styles.backgroundColor = `#${this.bgColor}`;
    } else {
      this.styles.backgroundColor = this.defaultColor;
    }

    if (this.fontColor) {
      this.styles.color = `#${this.fontColor}`;
    } else {
      this.styles.color = this.defaultFontColor;
    }
  }

  /**
   * Source: https://stackoverflow.com/a/13542669/6051978
   */

  shadeColor (color, percent) {
    const f = parseInt(color.slice(1), 16), t = percent < 0 ? 0 : 255;
    const p = percent < 0 ? percent * - 1 : percent, R = f >> 16, G = f >> 8 & 0x00FF, B = f & 0x0000FF;
    return '#' + (
      0x1000000 +
      (Math.round(( t - R ) * p ) + R ) * 0x10000 +
      (Math.round((t - G) * p) + G) * 0x100 +
      (Math.round((t - B) * p) + B)).toString(16).slice(1
    );
  }

  onMouseOver() {
    const color = this.shadeColor(this.styles.backgroundColor, 0.15);
    this.styles = {...this.styles, backgroundColor: color};
  }

  onMouseLeave() {
    this.styles = {...this.styles, backgroundColor: `#${this.bgColor}`};
  }

}
