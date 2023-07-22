import { projectsList } from './user_dynamic_interface';

export class Project {
	static id = 0;
	constructor(projectName) {
		this.projectName = projectName;
		this.tasks = [];
		this.id = ++Project.id;
	}

	get projectId() {
		return this.id
	}

	deleteProject(projectData) {
		const index = projectsList.indexOf(projectData);
		projectsList.splice(index, 1);
		console.log("post:", projectsList)
	}
}
