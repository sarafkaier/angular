import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
        <div class="counter">
        	<button (click)="decrement()" class="left">-</button>
        	<span>{{count}}</span>
        	<button (click)="increment()" class="right">+</button>
        </div>
    `,
    styles: [`
    	div { background-color: #ccc; text-align: center;}
    	span { width: 50%; }
    	.counter { width: 50%; margin: auto; }
    	.left { float : left; }
    	.right { float : right; }
    `]
})

export class CounterComponent implements OnInit {
	count = 0;

    constructor() {}

    ngOnInit() {}

    decrement() { this.count--; }
    increment() { this.count++; }

}