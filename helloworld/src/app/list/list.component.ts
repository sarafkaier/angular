import { Component, OnInit } from '@angular/core';
import { ListitemComponent } from '../list-item/list-item.component';

@Component({
  selector: 'app-list',
  template: `
  	<ul>
  		<li *ngFor="let item of items">
  			<app-listitem [myitem]="item"></app-listitem>
  		</li>
  	</ul>
  `,
  styles: []
})
export class ListComponent implements OnInit {

  items = ['Windows', 'IOS', 'Android', 'Linux'];

  constructor() { }

  ngOnInit() {
  }
  
}
