import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-operator-display-panel',
  template: `
    <div class="display-operator">
      <h2 class="display-operator-header">{{ operator.name }}</h2>
      <div class="display-operator-details">
        {{ operator.description }}
      </div>
    </div>
  `,
  styleUrls: ['./operator-display-panel.component.scss']
})
export class OperatorDisplayPanelComponent implements OnInit {

  @Input() operator;

  constructor() { }

  ngOnInit() {
  }

}
