import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';
import { TasklistItemComponent } from '../tasklist-item/tasklist-item.component';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {

  constructor(private ts: TaskService) { }

  ngOnInit() {
  	if (this.ts.getTaskCount() === 0) {
  		this.ts.addTask(new Task(0, 'Tache 1', false, 'Lorem ipsum elit consectetur officia elit fugiat duis id ex tempor velit non do ullamco sunt dolore aute in nisi pariatur nisi excepteur irure occaecat elit sit occaecat tempor mollit eiusmod aute ad excepteur nulla in irure dolore nostrud aliqua pariatur dolore elit cupidatat magna mollit in velit dolore nisi voluptate minim ullamco commodo aliqua fugiat et cupidatat dolore occaecat deserunt qui veniam quis ut ad labore nisi duis minim amet ut minim deserunt incididunt consectetur enim consectetur ut sunt ut officia minim consequat qui irure in incididunt pariatur fugiat amet irure sit fugiat quis dolore enim dolore qui id dolore in mollit elit ut sed minim sint eiusmod dolor fugiat mollit reprehenderit labore et dolore dolore consequat in qui amet culpa pariatur mollit magna cupidatat aute aute quis pariatur laborum excepteur proident fugiat aliquip velit officia ex laborum anim do dolore nostrud sint consectetur nostrud laborum minim amet adipisicing ea proident cupidatat ad ut sit aliquip sint adipisicing laborum consequat exercitation nisi in eu et voluptate amet pariatur ut aliquip incididunt ut laboris amet do cupidatat sit reprehenderit in incididunt veniam culpa sit do.'));
  		this.ts.addTask(new Task(0, 'Tache 2', false, 'Cupidatat commodo magna irure dolore magna laboris dolor voluptate occaecat reprehenderit sed adipisicing in commodo fugiat tempor culpa adipisicing sint veniam voluptate reprehenderit ullamco ut excepteur esse adipisicing mollit anim.'));
  		this.ts.addTask(new Task(0, 'Tache 3', false, 'Lorem ipsum ullamco minim voluptate adipisicing officia officia cupidatat occaecat qui labore dolore et eu dolor commodo sed dolore nisi aliquip dolore in excepteur minim sed id velit officia qui do occaecat non excepteur ut adipisicing consequat est eiusmod.'));
  		this.ts.addTask(new Task(0, 'Tache 4', false, 'Lorem ipsum veniam culpa pariatur sunt id cillum consequat cillum sunt est nisi culpa sunt nulla velit qui excepteur mollit voluptate deserunt velit incididunt do nisi commodo sit quis sunt et eiusmod et consectetur dolor laboris amet nisi eu ex magna ea ex in anim in irure sint aliquip in ea minim qui deserunt minim dolor eiusmod esse tempor veniam laborum sunt do sed sunt ad dolor non eiusmod in esse aliqua ut aliqua consectetur eu magna quis labore nulla minim adipisicing sint cillum est in voluptate dolor occaecat id et consequat est non anim ullamco elit esse dolor enim fugiat reprehenderit in ut esse ullamco laboris eiusmod aliquip ut velit adipisicing ut dolore occaecat duis et est ut reprehenderit consequat sit laboris dolore consectetur sed consectetur commodo non amet pariatur commodo nostrud aliqua labore eu do do fugiat id incididunt cillum proident consectetur aliqua ex cupidatat velit exercitation sint cillum ea.'));
  	}
  }
  get tasks(): Task[] {
  	return this.ts.getAllTask();
  }
}
