import { Component } from '@angular/core';
import { Tarefa } from './tarefa';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent {
	title = 'TODOapp';

	arrayDeTarefas: Tarefa[] = [];

	constructor() {
		this.READ_tarefas();
	}
	READ_tarefas() {
		this.arrayDeTarefas = [
			new Tarefa('Estudar Frameworks WEB', false),
			new Tarefa('Comer Pizza', false),
			new Tarefa('Ajudar meus pais', false),
		];
	}
}
