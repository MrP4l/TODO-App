import startOfWeek from 'date-fns/startOfWeek'
import endOfWeek from 'date-fns/endOfWeek';
import format from 'date-fns/format';
import { projectsList } from './user_dynamic_interface';
import { UI } from "./ui_class";

export class Filter {
	allFilter() {
		const userInterface = new UI();

		const removeTasks = document.querySelectorAll(".newTaskContainer");
		removeTasks.forEach(taskContainer => {
			taskContainer.remove();
		});

		projectsList.forEach(project => {
			project.tasks.forEach(task => {
				userInterface.createTask(task);
			});
		});

		// TODO Add the possibility to delete the tasks from here?
		const tasks = document.querySelectorAll(".newTaskContainer");

		const newProjectName = document.getElementById("mainSquareTitleTextChild")
		newProjectName.textContent = "All";
	}

	todayFilter() {
		const date = new Date();
		const currentDate = format(date, 'dd/MM/yyyy');

		const removeTasks = document.querySelectorAll(".newTaskContainer");
		removeTasks.forEach(taskContainer => {
			taskContainer.remove();
		});

		// TODO fix this
		projectsList.forEach(project => {
			project.tasks.filter(task => task.date === currentDate)
				.forEach(filteredTask => {
					userInterface.createTask(filteredTask);
				});
		});

		const newProjectName = document.getElementById("mainSquareTitleTextChild")
		newProjectName.textContent = "Today";
	}

	weekFilter() {
		const date = new Date();
		const startOfTheWeek = startOfWeek(date, { weekStartsOn: 1 });
		const endOfTheWeek = endOfWeek(date, { weekStartsOn: 1 });
		const startOfTheWeekFormatted = format(startOfTheWeek, 'dd/MM/yyyy');
		const endOfTheWeekFormatted = format(endOfTheWeek, 'dd/MM/yyyy');

		const removeTasks = document.querySelectorAll(".newTaskContainer");
		removeTasks.forEach(taskContainer => {
			taskContainer.remove();
		});

		projectsList.forEach(project => {
			project.tasks.filter(task => task.date >= startOfTheWeekFormatted && task.date <= endOfTheWeekFormatted)
				.forEach(filteredTask => {
					const taskInstance = new Task(filteredTask.taskName, filteredTask.projectId, filteredTask.taskId);
					taskInstance.createTask();
				});
		});
		const newProjectName = document.getElementById("mainSquareTitleTextChild")
		newProjectName.textContent = "Week";

	}
}