export class Task {
	// Identifiant
	id: number;

	// Titre de la tâche
	title: string;

	// Flag, vrai si la tache est terminée
	completed: boolean;

	description: string;

	/*
	 * Constructeur
	*/
	constructor(id: number, title: string, completed: boolean, description: string) {
		this.id = id;
		this.title = title;
		this.completed = completed;
		this.description = description;
	}
}