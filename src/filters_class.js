import startOfWeek from 'date-fns/startOfWeek'
import endOfWeek from 'date-fns/endOfWeek';
import format from 'date-fns/format';
import { projectsList } from './user_dynamic_interface';
import { UI } from "./ui_class";
import { Task } from "./task_class";

const userInterface = new UI();
const task = new Task();

export class Filter {

	allFilter() {
		const newProjectName = document.getElementById("mainSquareTitleTextChild");
		if (newProjectName.textContent === "All") {
			return
		}

		const removeTasks = document.querySelectorAll(".newTaskContainer");
		removeTasks.forEach(taskContainer => {
			taskContainer.remove();
		});

		const plusIcon = document.getElementById("mainSquareTitleIconChild");
		plusIcon.style.visibility = "hidden";

		projectsList.forEach(project => {
			project.tasks.forEach(task => {
				userInterface.createTask(task);
			});
		});

		const tasks = document.querySelectorAll(".newTaskContainer");
		tasks.forEach(el => {
			el.addEventListener("click", () => {
				const taskId = parseInt(el.dataset.id);
				for (const project of projectsList) {
					const taskIndex = project.tasks.findIndex(task => task.id === taskId);
					if (taskIndex !== -1) {
						const taskData = project.tasks[taskIndex];
						task.deleteTask(taskData);
						userInterface.deleteTask(taskData);
						break;
					}
				}
			});
		});

		newProjectName.textContent = "All";
	}

	todayFilter() {
		const date = new Date();
		const currentDate = format(date, 'dd/MM/yyyy');

		const removeTasks = document.querySelectorAll(".newTaskContainer");
		removeTasks.forEach(taskContainer => {
			taskContainer.remove();
		});

		const plusIcon = document.getElementById("mainSquareTitleIconChild");
		plusIcon.style.visibility = "hidden";

		projectsList.forEach(project => {
			project.tasks.forEach(task => {
				if (task.date === currentDate) {
					userInterface.createTask(task);
				}
			});
		});

		const todayTasks = document.querySelectorAll(".newTaskContainer");
		todayTasks.forEach(el => {
			el.addEventListener("click", () => {
				const taskId = parseInt(el.dataset.id);
				for (const project of projectsList) {
					const taskIndex = project.tasks.findIndex(task => task.id === taskId);
					if (taskIndex !== -1) {
						const taskData = project.tasks[taskIndex];
						task.deleteTask(taskData);
						userInterface.deleteTask(taskData);
						break;
					}
				}
			});
		});

		const tasks = document.querySelectorAll(".newTaskContainer");
		tasks.forEach(task => {
			console.log(task)
		})


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
			project.tasks.forEach(task => {
				if (task.date >= startOfTheWeekFormatted && task.date <= endOfTheWeekFormatted) {
					userInterface.createTask(task);
				}
			});
		});

		const plusIcon = document.getElementById("mainSquareTitleIconChild");
		plusIcon.style.visibility = "hidden";

		const weekTasks = document.querySelectorAll(".newTaskContainer");
		weekTasks.forEach(el => {
			el.addEventListener("click", () => {
				const taskId = parseInt(el.dataset.id);
				for (const project of projectsList) {
					const taskIndex = project.tasks.findIndex(task => task.id === taskId);
					if (taskIndex !== -1) {
						const taskData = project.tasks[taskIndex];
						task.deleteTask(taskData);
						userInterface.deleteTask(taskData);
						break;
					}
				}
			});
		});

		const newProjectName = document.getElementById("mainSquareTitleTextChild")
		newProjectName.textContent = "Week";

	}
}