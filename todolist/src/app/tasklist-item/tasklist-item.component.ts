import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-tasklist-item',
  templateUrl: './tasklist-item.component.html',
  styleUrls: ['./tasklist-item.component.css']
})
export class TasklistItemComponent implements OnInit {

  @Input() task: Task;

  constructor() { }

  ngOnInit() {
  }

}
