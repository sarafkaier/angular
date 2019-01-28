import { Injectable } from '@angular/core';
import { Task} from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks: Task[] = []; // Les tâches 

  lastId = 0; // L'id pour une nouvelle tache

  constructor() { }

  getTaskCount(): number {
  	return this.tasks.length;
  }

  getAllTask(): Task[] {
  	return this.tasks;
  }

  getTaskByID(id:number): Task {
  	return this.tasks.filter(task => task.id === id).pop();
  }

  addTask(t: Task): TaskService {
  	if (t.id === 0) {
  		t.id = ++this.lastId;
  	}
  	this.tasks.push(t);
  	return this;
  }

  updateTaskById(id: number, values: Task): Task {
  	const t: Task = this.getTaskByID(id);
  	if (!t) {
  		return null;
  	}
  	Object.assign(t, values);
  	return t;
  }

  deleteTaskById(id: number): TaskService {
  	this.tasks = this.tasks.filter(task => task.id !== id);
  	return this;	
  }
}
