import format from 'date-fns/format';
import { projectsList } from './user_dynamic_interface';
import { add } from 'date-fns';

export class UI {
    addANewProjectBox() {
        const newNameContainer = document.createElement("div");
        const newNameTextfield = document.createElement("input");
        const newNameAddButton = document.createElement("i");
        const newNameCancelButton = document.createElement("i");

        newNameContainer.id = "newNameContainer";
        newNameTextfield.setAttribute("type", "text");
        newNameTextfield.id = "newNameTextfieldInput";
        newNameTextfield.placeholder = "Add a new project";
        newNameAddButton.id = "newNameAddButton";
        newNameAddButton.classList.add("gg-math-plus");
        newNameCancelButton.id = "newNameCancelButton";
        newNameCancelButton.classList.add("gg-math-plus");

        newNameContainer.appendChild(newNameTextfield);
        newNameContainer.appendChild(newNameAddButton);
        newNameContainer.appendChild(newNameCancelButton);
        sideColumnSecondChild.appendChild(newNameContainer);

        sideColumnSecondChild.insertBefore(newNameContainer, sideColumnSecondChild.children[1]);
    }

    renderProjectList(projectData) {
        const removeProjects = document.querySelectorAll(".newProjectContainer");
        removeProjects.forEach((project) => {
            console.log("prj.id:", project)
            if (parseInt(project.dataset.id) === projectData.id) {
                project.remove();
            }
        })
        const title = document.getElementById("mainSquareTitleTextChild");
        if (projectsList.length === 0) {
            title.innerText = "";
        } else {
            title.innerText = projectsList[projectsList.length - 1].projectName;
        }
        projectsList.forEach(project => {
            console.log(project)

            const newProjectContainer = document.createElement("div");
            const newProjectName = document.createElement("div");
            const newProjectDeleteButton = document.createElement("div");

            newProjectName.textContent = project.projectName;
            newProjectDeleteButton.classList.add("fa-solid");
            newProjectDeleteButton.classList.add("fa-trash");

            newProjectContainer.classList.add("newProjectContainer");
            newProjectName.classList.add("newProjectName");
            newProjectDeleteButton.classList.add("newProjectDeleteButton");

            sideColumnSecondChild.appendChild(newProjectContainer);
            newProjectContainer.appendChild(newProjectName);
            newProjectContainer.appendChild(newProjectDeleteButton);

            newProjectContainer.dataset.id = project.id;

            return newProjectContainer;
        })
    }

    createANewProjectInterface(project) {
        const tasksToDelete = document.querySelectorAll(".newTaskContainer");
        tasksToDelete.forEach((task) => {
            task.remove();
        })

        const title = document.getElementById("mainSquareTitleTextChild");
        title.innerText = project.projectName

        console.log(project)

        const newProjectContainer = document.createElement("div");
        const newProjectName = document.createElement("div");
        const newProjectDeleteButton = document.createElement("div");

        newProjectName.textContent = project.projectName;
        newProjectDeleteButton.classList.add("fa-solid");
        newProjectDeleteButton.classList.add("fa-trash");

        newProjectContainer.classList.add("newProjectContainer");
        newProjectName.classList.add("newProjectName");
        newProjectDeleteButton.classList.add("newProjectDeleteButton");

        sideColumnSecondChild.appendChild(newProjectContainer);
        newProjectContainer.appendChild(newProjectName);
        newProjectContainer.appendChild(newProjectDeleteButton);

        newProjectContainer.dataset.id = project.id;

        const plusIcon = document.getElementById("mainSquareTitleIconChild");
        plusIcon.style.visibility = "visible";

        const addTaskIcon = document.getElementById("mainSquareTitleIconChild");
        addTaskIcon.classList.add("fa-solid");
        addTaskIcon.classList.add("fa-plus");
    }

    renderProject(projectData) {
        const tasksToDelete = document.querySelectorAll(".newTaskContainer");
        tasksToDelete.forEach((task) => {
            task.remove();
        })
        const index = projectsList.indexOf(projectData);
        if (projectsList.length > 0 && index !== -1) {
            projectsList[index].tasks.forEach((task) => {
                const mainSquareTasksChild = document.getElementById("mainSquareTasksChild");
                const newTaskContainer = document.createElement("div");
                const newTaskIcon = document.createElement("div");
                const newTaskName = document.createElement("div");
                const newTaskDate = document.createElement("div");

                newTaskContainer.classList.add("newTaskContainer");
                newTaskIcon.id = "newTaskIcon";
                newTaskName.id = "newTaskName";
                newTaskDate.id = "newTaskDate";

                newTaskName.innerText = task.taskName;
                newTaskIcon.classList.add("fa-solid");
                newTaskIcon.classList.add("fa-check-double");

                const date = new Date();
                const currentDate = format(date, 'dd/MM/yyyy');

                this.date = currentDate;

                newTaskDate.innerHTML = this.date;

                mainSquareTasksChild.appendChild(newTaskContainer);
                newTaskContainer.appendChild(newTaskIcon);
                newTaskContainer.appendChild(newTaskName);
                newTaskContainer.appendChild(newTaskDate);

                newTaskContainer.dataset.id = task.id;
            })
            const title = document.getElementById("mainSquareTitleTextChild");
            title.innerText = projectData.projectName;
            const plusIcon = document.getElementById("mainSquareTitleIconChild");
            plusIcon.style.visibility = "visible";
        }
    }
    // TODO Delete also the tasks
    deleteProject(projectData) {
        const projects = document.querySelectorAll(".newProjectContainer");
        projects.forEach((project) => {
            if (parseInt(project.dataset.id) === projectData.id) {
                project.remove();
                const title = document.getElementById("mainSquareTitleTextChild");
                if (projectsList.length === 0) {
                    title.innerText = "";
                } else {
                    title.innerText = projectsList[projectsList.length - 1].projectName;
                }
            }
        })
    }

    deleteTask(taskData) {
        const tasks = document.querySelectorAll(".newTaskContainer");
        tasks.forEach((task) => {
            console.log("task:", task)
            if (parseInt(task.dataset.id) === taskData.id) {
                task.remove();
            }
        })
    }

    addANewTaskBox() {
        const taskNameContainer = document.createElement("div");
        const taskNameInput = document.createElement("input");
        const taskNameAdd = document.createElement("i");
        const taskNameCancel = document.createElement("i");

        taskNameContainer.classList.add("taskNameContainer");
        taskNameInput.setAttribute("type", "text");
        taskNameInput.id = "taskNameInput";
        taskNameInput.placeholder = "Add a task";
        taskNameAdd.id = "taskNameAdd";
        taskNameCancel.id = "taskNameCancel";
        taskNameAdd.classList.add("gg-math-plus");
        taskNameCancel.classList.add("gg-math-plus");

        taskNameContainer.appendChild(taskNameInput);
        taskNameContainer.appendChild(taskNameAdd);
        taskNameContainer.appendChild(taskNameCancel);
        mainSquareTasksChild.appendChild(taskNameContainer);

        mainSquareTasksChild.insertBefore(taskNameContainer, mainSquareTasksChild.children[0]);
    }

    createTask(task) {
        const mainSquareTasksChild = document.getElementById("mainSquareTasksChild");
        const newTaskContainer = document.createElement("div");
        const newTaskIcon = document.createElement("div");
        const newTaskName = document.createElement("div");
        const newTaskDate = document.createElement("div");

        newTaskContainer.classList.add("newTaskContainer");
        newTaskIcon.id = "newTaskIcon";
        newTaskName.id = "newTaskName";
        newTaskDate.id = "newTaskDate";

        newTaskName.textContent = task.taskName;
        newTaskIcon.classList.add("fa-solid");
        newTaskIcon.classList.add("fa-check-double");

        const date = new Date();
        const currentDate = format(date, 'dd/MM/yyyy');

        this.date = currentDate;

        newTaskDate.innerHTML = this.date;

        newTaskContainer.dataset.id = task.id;

        mainSquareTasksChild.appendChild(newTaskContainer);
        newTaskContainer.appendChild(newTaskIcon);
        newTaskContainer.appendChild(newTaskName);
        newTaskContainer.appendChild(newTaskDate);
    }
}