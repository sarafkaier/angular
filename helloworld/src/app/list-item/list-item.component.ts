import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-listitem',
  template: `
  	<span>
  		--- {{ myitem }} ---
  	</span>
  `,
  styles: []
})
export class ListItemComponent implements OnInit {

  @Input() myitem;

  constructor() { }

  ngOnInit() {
  }
}
