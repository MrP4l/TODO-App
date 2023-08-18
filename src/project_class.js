import { projectsList } from './user_dynamic_interface';

export class Project {
	static id = parseInt(localStorage.getItem('project_id') || '0');
	constructor(projectName) {
		this.projectName = projectName;
		this.tasks = [];
		this.id = ++Project.id;
		localStorage.setItem('project_id', Project.id.toString());
	}

	get projectId() {
		return this.id
	}

	deleteProject(projectData) {
		const index = projectsList.indexOf(projectData);
		if (index !== -1) {
			projectsList.splice(index, 1);
		}
	}
}
