import startOfWeek from 'date-fns/startOfWeek'
import endOfWeek from 'date-fns/endOfWeek';
import format from 'date-fns/format';
import parse from 'date-fns/format';
import isBefore from 'date-fns/format';
import isAfter from 'date-fns/format';
import { projectsList } from './user_dynamic_interface';
import { UI } from "./ui_class";
import { Task } from "./task_class";
import { setLocalStorage, getLocalStorage } from './local_storage';

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
						setLocalStorage(projectsList);
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
						setLocalStorage(projectsList);
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
		const startOfTheWeekFormatted = new Date(format(startOfTheWeek, 'MM/dd/yyyy'));
		const endOfTheWeekFormatted = new Date(format(endOfTheWeek, 'MM/dd/yyyy'));

		const removeTasks = document.querySelectorAll(".newTaskContainer");
		removeTasks.forEach(taskContainer => {
			taskContainer.remove();
		});

		projectsList.forEach(project => {
			project.tasks.forEach(task => {
				//TODO task.date <= endOfTheWeekFormatted doesn't work
			//	const taskDate = parse(toString(task.date), 'dd/MM/yyyy', new Date());
				const taskDateString = (task.date).toString();
				console.log("1:", task.date, typeof(taskDateString));
				console.log("2:", startOfTheWeekFormatted, endOfTheWeekFormatted);
				const taskDateFormatted = format()
				console.log("ts:", taskDate);
			//	const taskDate = parseDate(task.date, 'dd/MM/yyyy');
				if (task.Date >= startOfTheWeekFormatted && task.Date <= endOfTheWeekFormatted) {
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
						setLocalStorage(projectsList);
						break;
					}
				}
			});
		});

		const newProjectName = document.getElementById("mainSquareTitleTextChild")
		newProjectName.textContent = "Week";

	}
}