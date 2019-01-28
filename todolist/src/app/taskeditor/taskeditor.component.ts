import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Task } from '../task';
import { TaskService } from '../task.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-taskeditor',
  templateUrl: './taskeditor.component.html',
  styleUrls: ['./taskeditor.component.css']
})
export class TaskeditorComponent implements OnInit {

  id: number; // id de la tâche à afficher

  task: Task; // l'objet à afficher

  constructor(private route: ActivatedRoute, private ts: TaskService, private router: Router) { }

  ngOnInit() {
  	// +params['id'] => transforme la string en number
  	this.route.params.subscribe(params => { this.id = +params['id']; });
  	this.task = this.ts.getTaskByID(this.id);
  }

  validate() {
  	this.ts.updateTaskById(this.id, this.task);
  }

  delete() {
  	this.ts.deleteTaskById(this.id);
  	this.router.navigateByUrl('/tasks');
  }

  cancel() {
  	this.router.navigateByUrl('/tasks');
  }
}
