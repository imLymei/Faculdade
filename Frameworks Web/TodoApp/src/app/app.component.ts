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

	CREATE_tarefa(_descricaoNovaTarefa: string) {
		var novaTarefa = new Tarefa(_descricaoNovaTarefa, false);
		this.arrayDeTarefas.push(novaTarefa);
	}

	DELETE_tarefa(item_descricao: string){
		var index = this.arrayDeTarefas.map(function(e) { return e.descricao; }).indexOf(item_descricao);
		this.arrayDeTarefas.splice(index,1)
	}

	READ_tarefas() {
		this.arrayDeTarefas = [
			new Tarefa('Estudar Frameworks WEB', false),
			new Tarefa('Comer Pizza', false),
			new Tarefa('Ajudar meus pais', false),
			new Tarefa('Ariane Lacerda - 215641', false),
			new Tarefa('Felipe Cardoso - 218411', false),
		];
	}
}
