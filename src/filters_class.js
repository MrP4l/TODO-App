import startOfWeek from 'date-fns/startOfWeek'
import endOfWeek from 'date-fns/endOfWeek';
import format from 'date-fns/format';
import { projectsList } from './user_dynamic_interface';
import { UI } from "./ui_class";

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

		// TODO Add the possibility to delete the tasks from here? REMEMBER dataset is the same of id inside task
		// TODO Fix/Finish this
		const tasks = document.querySelectorAll(".newTaskContainer");
		tasks.forEach(el => {
			el.addEventListener("click", () => {
				console.log("tssss", el);
				const taskData = projectsList.tasks.find(task => task.id === el.dataset.id);
				console.log(taskData) 
			})
		})

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

		// TODO Add the possibility to delete the tasks from here?

		const tasks = document.querySelectorAll(".newTaskContainer");
		tasks.forEach(task  => {
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

		// TODO Add the possibility to delete the tasks from here?

		const newProjectName = document.getElementById("mainSquareTitleTextChild")
		newProjectName.textContent = "Week";

	}
}