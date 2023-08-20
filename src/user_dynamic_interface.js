export const projectsList = getLocalStorage() || [];
export let projectDataIdShowed = null;
import { Project } from "./project_class";
import { Task } from "./task_class";
import { Filter } from "./filters_class";
import { UI } from "./ui_class";
import { setLocalStorage, getLocalStorage } from './local_storage';
import {createDropDownMenu} from './responsiveness';

function userDynamicInterface() {
    const addProject = document.getElementById("sideColumnAddProjectContainer");
    const sideColumnSecondChild = document.getElementById("sideColumnSecondChild");

    const userInterface = new UI();
    
    if (projectsList.length > 0) {
        const project = new Project();
        userInterface.renderProjectList(projectsList);
        const projects = document.querySelectorAll(".newProjectContainer");
        projects.forEach(project => {
            const projectId = project.dataset.id;
            const projectData = projectsList.find(project => project.id === parseInt(projectId));
            project.addEventListener("click", () => {
                userInterface.renderProject(projectData);
                if (projectsList.indexOf(projectData) !== -1) {
                    projectDataIdShowed = projectData.id;
                }
                const tasks = document.querySelectorAll(".newTaskContainer");
                tasks.forEach(task => {
                    if (projectsList.indexOf(projectData) !== -1) {
                        const taskId = task.dataset.id;
                        const index = projectsList.findIndex(project => projectDataIdShowed === parseInt(project.id));
                        const taskData = projectsList[index].tasks.find(task => task.id === parseInt(taskId));
                        task.addEventListener("click", () => {
                            const taskObj = new Task();
                            taskObj.deleteTask(taskData);
                            userInterface.deleteTask(taskData);
                            setLocalStorage(projectsList);
                        })
                    }
                })
            });
        })
        //  Click the delete project button to delete the project
        const deleteButtons = document.querySelectorAll(".newProjectDeleteButton");
        deleteButtons.forEach(button => {
            const deleteButtonParent = button.closest(".newProjectContainer");
            const projectId = deleteButtonParent.dataset.id;
            const projectData = projectsList.find(project => project.id === parseInt(projectId));
            button.addEventListener("click", () => {
                project.deleteProject(projectData);
                userInterface.deleteProject(projectData);
                if (projectsList.length > 0) {
                    projectDataIdShowed = projectsList[projectsList.length - 1].id;
                } else {
                    projectDataIdShowed = null;
                }
                setLocalStorage(projectsList);
            })
        })
    }

    //  Click to open or close the box Add Project
    addProject.addEventListener("click", () => {
        if (sideColumnSecondChild.querySelector("#newNameContainer")) {
            const projectNameContainer = document.querySelector("#newNameContainer");
            sideColumnSecondChild.removeChild(projectNameContainer);
            return;
        }
        userInterface.addANewProjectBox();
        //  Click the green button to create a new project
        newNameAddButton.addEventListener("click", () => {
            const newNameTextfield = document.getElementById("newNameTextfieldInput");
            const projectName = newNameTextfield.value.trim();
            if (projectName !== "") {
                const project = new Project(projectName);
                projectsList.push(project);
                projectDataIdShowed = project.id;

                userInterface.createANewProjectInterface(project);
                //  Rendering the project clicked
                const projects = document.querySelectorAll(".newProjectContainer");
                projects.forEach(project => {
                    const projectId = project.dataset.id;
                    const projectData = projectsList.find(project => project.id === parseInt(projectId));
                    project.addEventListener("click", () => {
                        userInterface.renderProject(projectData);
                        if (projectsList.indexOf(projectData) !== -1) {
                            projectDataIdShowed = projectData.id;
                        }
                        const tasks = document.querySelectorAll(".newTaskContainer");
                        tasks.forEach(task => {
                            if (projectsList.indexOf(projectData) !== -1) {
                                const taskId = task.dataset.id;
                                const index = projectsList.findIndex(project => projectDataIdShowed === parseInt(project.id));
                                const taskData = projectsList[index].tasks.find(task => task.id === parseInt(taskId));
                                task.addEventListener("click", () => {
                                    const taskObj = new Task();
                                    taskObj.deleteTask(taskData);
                                    userInterface.deleteTask(taskData);
                                    setLocalStorage(projectsList);
                                })
                            }
                        })
                    });
                });
                //  Click the delete project button to delete the project
                const deleteButtons = document.querySelectorAll(".newProjectDeleteButton");
                deleteButtons.forEach(button => {
                    const deleteButtonParent = button.closest(".newProjectContainer");
                    const projectId = deleteButtonParent.dataset.id;
                    const projectData = projectsList.find(project => project.id === parseInt(projectId));
                    button.addEventListener("click", () => {
                        project.deleteProject(projectData);
                        userInterface.deleteProject(projectData);
                        if (projectsList.length > 0) {
                            projectDataIdShowed = projectsList[projectsList.length - 1].id;
                        } else {
                            projectDataIdShowed = null;
                        }
                        setLocalStorage(projectsList);
                    })
                })
                setLocalStorage(projectsList);

                const mediaQuery = window.matchMedia('(max-width: 430px)');
                if (mediaQuery.matches) {
                    createDropDownMenu();
                } 
            }
            sideColumnSecondChild.removeChild(newNameContainer);
        });
        newNameCancelButton.addEventListener("click", () => {
            sideColumnSecondChild.removeChild(newNameContainer);
        });
    })

    const addTask = document.getElementById("mainSquareTitleIconChild");
    const mainSquareTasksChild = document.getElementById("mainSquareTasksChild");
    //  Click to open the box for add a task
    addTask.addEventListener("click", () => {
        if (mainSquareTasksChild.querySelector(".taskNameContainer")) {
            const taskNameContainer = document.querySelector(".taskNameContainer");
            mainSquareTasksChild.removeChild(taskNameContainer);
            return;
        }
        userInterface.addANewTaskBox();

        const taskBox = document.querySelector(".taskNameContainer");
        taskNameAdd.addEventListener("click", () => {
            const taskName = taskNameInput.value.trim();
            if (taskName !== "") {
                const index = projectsList.findIndex(project => projectDataIdShowed === parseInt(project.id))
                const projectId = projectsList[index].id;
                const task = new Task(taskName, projectId);
                projectsList[index].tasks.push(task);
                userInterface.createTask(task);
                //  Click the task to delete it
                const tasks = document.querySelectorAll(".newTaskContainer");
                tasks.forEach(task => {
                    const taskId = task.dataset.id;
                    const index = projectsList.findIndex(project => projectDataIdShowed === parseInt(project.id))
                    const taskData = projectsList[index].tasks.find(task => task.id === parseInt(taskId))
                    task.addEventListener("click", () => {
                        const taskObj = new Task();
                        taskObj.deleteTask(taskData);
                        userInterface.deleteTask(taskData);
                        setLocalStorage(projectsList);
                    })
                })
                setLocalStorage(projectsList);
            }
            mainSquareTasksChild.removeChild(taskBox);
        })
        taskNameCancel.addEventListener("click", () => {
            mainSquareTasksChild.removeChild(taskBox);
        })
    });

    // TODO the filters work only when it's added the second project
    // TODO on mobile the arrow is blue
    const parent = document.getElementById("sideColumnFirstChild");
    const dateFilters = parent.querySelectorAll("*");
    dateFilters.forEach(date => {
        date.addEventListener("click", () => {
            const filter = new Filter();
            if (date.id === "sideColumnAllContainer") {
                filter.allFilter();
            } else if (date.id === "sideColumnTodayContainer") {
                filter.todayFilter();
            //    setLocalStorage(projectsList);
            } else if (date.id === "sideColumnWeekContainer") {
                filter.weekFilter();
            //    setLocalStorage(projectsList);
            }
        })
    })

}

export default userDynamicInterface;