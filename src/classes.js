import startOfWeek from 'date-fns/startOfWeek'
import endOfWeek from 'date-fns/endOfWeek';
import format from 'date-fns/format';
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

  deleteProject(project) {
    const projectId = project.id;
    const projectToRemove = projectsList.find(project => project.id === projectId);
    console.log("pre:",projectsList)
    if (projectToRemove) {
      const index = projectsList.indexOf(projectToRemove)
      projectsList.splice(index, 1);
      console.log("post:",projectsList)
    }
  }
}

//TODO
export class Task {
  static id = 0;
  constructor(taskName) {
    this.taskName = taskName;
    this.id = ++Task.id;
  }

  get taskId() {
    return this.id
  }

  createTask() {
    const mainSquareTasksChild = document.getElementById("mainSquareTasksChild");
    const newTaskContainer = document.createElement("div");
    const newTaskIcon = document.createElement("div");
    const newTaskName = document.createElement("div");
    const newTaskDate = document.createElement("div");

    newTaskContainer.classList.add("newTaskContainer");
    newTaskIcon.id = "newTaskIcon";
    newTaskName.id = "newTaskName";
    newTaskDate.id = "newTaskDate";

    newTaskName.textContent = this.taskName;
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

    newTaskContainer.addEventListener("click", () => {
      this.deleteTask(newTaskContainer);
    });

    return newTaskContainer;
  }

  deleteTask(newTaskContainer) {
    const project = projectsList.find(project => project.id === this.projectId);
    if (project) {
      const taskIndex = project.tasks.findIndex(task => task.taskId === this.taskId);
      if (taskIndex !== -1) {
        project.tasks.splice(taskIndex, 1);
      }
    }
    newTaskContainer.remove();
  }
}

export class Filter {
  allFilter() {
    const removeTasks = document.querySelectorAll(".newTaskContainer");
    removeTasks.forEach(taskContainer => {
      taskContainer.remove();
    });

    this.projectsList.forEach(project => {
      project.tasks.forEach(task => {
        const taskInstance = new Task(task.taskName, task.projectId, task.taskId);
        taskInstance.createTask();
      });
    });

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

    projectsList.forEach(project => {
      project.tasks.filter(task => task.date === currentDate)
        .forEach(filteredTask => {
          const taskInstance = new Task(filteredTask.taskName, filteredTask.projectId, filteredTask.taskId);
          taskInstance.createTask();
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

  //TODO Shown the tasks inside the proj
  createProjectInterface(project) {
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

    const addTaskIcon = document.getElementById("mainSquareTitleIconChild");
    addTaskIcon.classList.add("fa-solid");
    addTaskIcon.classList.add("fa-plus");
  }

  renderProject(projectData) {
    const tasksToDelete = document.querySelectorAll(".newTaskContainer");
    tasksToDelete.forEach((task) => {
      task.remove();
    })
    const index = projectData.id - 1
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
    })
    const title = document.getElementById("mainSquareTitleTextChild");
    title.innerText = projectData.projectName
  
  //  newProjectName.innerText = lastProject.projectName;
  //  mainSquareTitleIconChild.classList.add("fa-solid");
  //  mainSquareTitleIconChild.classList.add("fa-plus");
  //  //TODO show the project's tasks
  }
  // TODO Delete also the tasks and the title
  deleteInterface(projectData) {
    const removeProjects = document.querySelectorAll(".newProjectContainer");
    removeProjects.forEach((project) => {
      if (parseInt(project.dataset.id) === projectData.id) {
        project.remove();
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
}
