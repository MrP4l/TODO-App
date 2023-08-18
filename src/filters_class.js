import startOfWeek from 'date-fns/startOfWeek'
import endOfWeek from 'date-fns/endOfWeek';
import format from 'date-fns/format';
import { projectsList } from './user_dynamic_interface';
import { UI } from "./ui_class";
import { Task } from "./task_class";
import { setLocalStorage, getLocalStorage } from './local_storage';

const userInterface = new UI();

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
						const task = new Task();
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

		const titleBottomBorder = document.getElementById("mainSquareTitleChild");
		titleBottomBorder.style.borderBottom = "1px solid rgba(255, 255, 255, 0.8)";

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
						const task = new Task();
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
		newProjectName.textContent = "Today";

		const titleBottomBorder = document.getElementById("mainSquareTitleChild");
		titleBottomBorder.style.borderBottom = "1px solid rgba(255, 255, 255, 0.8)";
	}

	weekFilter() {
		const date = new Date();
		const startOfTheWeek = startOfWeek(date, { weekStartsOn: 1 });
		const endOfTheWeek = endOfWeek(date, { weekStartsOn: 1 });
		const startOfTheWeekFormatted = format(startOfTheWeek, 'yyyyMMdd');
		const endOfTheWeekFormatted = format(endOfTheWeek, 'yyyyMMdd');

		const removeTasks = document.querySelectorAll(".newTaskContainer");
		removeTasks.forEach(taskContainer => {
			taskContainer.remove();
		});

		projectsList.forEach(project => {
			project.tasks.forEach(task => {
			//	Tried with date-fns parse + format but it recognizes the wrong date (my date: gg/mm/yyyy interpreted: mm/gg/yyyy)
				const [day, month, year] = task.date.split('/').map(Number);
				const parsedDate = new Date(year, month - 1, day); 
				const formattedDate = format(parsedDate, 'yyyyMMdd')
				if (formattedDate >= startOfTheWeekFormatted && formattedDate <= endOfTheWeekFormatted) {
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
						const task = new Task();
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

		const titleBottomBorder = document.getElementById("mainSquareTitleChild");
		titleBottomBorder.style.borderBottom = "1px solid rgba(255, 255, 255, 0.8)";
	}
}