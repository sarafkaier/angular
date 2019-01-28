import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from '../task';
import { TaskService } from '../task.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-taskdetail',
  templateUrl: './taskdetail.component.html',
  styleUrls: ['./taskdetail.component.css']
})
export class TaskdetailComponent implements OnInit {

  id: number; // id de la tâche à afficher

  task: Task; // l'objet à afficher

  constructor(private route: ActivatedRoute, private ts: TaskService) { }

  ngOnInit() {
  	// +params['id'] => transforme la string en number
  	this.route.params.subscribe(params => { this.id = +params['id']; });
  	this.task = this.ts.getTaskByID(this.id);
  }
  
  showProgress(buttonValue: string){
  	if(buttonValue === 'En cours') {
  		$("#bar").css({ width: '50%', 'background-color' : 'orange', 'aria-valuenow' : '100'});
  	} else if(buttonValue==='A traiter') {
  		$("#bar").css({ width: '10%', 'background-color':'red','aria-valuenow':'100'});;
  	} else {
  		$("#bar").css({width: '100%', 'background-color':'green' ,'aria-valuenow':'100'});
  	}
  }
}
