import { Component } from '@angular/core';
import { CounterComponent } from './counter/counter.component';
import { ListComponent } from './list/list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'helloworld';
  
  message = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
  
  name = '';
  
  firstname = 'Sara';
  
  complete = false;
  
  toggleComplete() {
  	if (this.firstname !== '') {
  		this.firstname = '';
  	}
  	else {
  		this.firstname = 'jean';
  	}
  }
}
