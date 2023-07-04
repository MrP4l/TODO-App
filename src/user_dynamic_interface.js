export const projectsList = [];
import { Project, Task, Filter, UI} from "./classes";
function userDynamicInterface() {
    const addProject = document.getElementById("sideColumnAddProjectContainer");
    const sideColumnSecondChild = document.getElementById("sideColumnSecondChild");
//    let projectId = 0;
//    let taskId = 0;

    const userInterface = new UI(projectsList);

    addProject.addEventListener("click", () => {
        if (sideColumnSecondChild.querySelector("#newNameContainer")) {
            return;
        }
        userInterface.addANewProjectBox();

        newNameAddButton.addEventListener("click", () => {
            const newNameTextfield = document.getElementById("newNameTextfieldInput");
            const projectName = newNameTextfield.value.trim();
            if (projectName !== "") {
                const newProject = new Project(projectName);
                projectsList.push(newProject);

                console.log(projectsList);
                userInterface.renderProjectList();
                userInterface.showTheProjectCreatedRightNow();

                const projects = document.querySelectorAll("#newProjectContainer");
                projects.forEach(project => {
                    const projectId = project.dataset.id;
                    const projectData = projectsList.find(project => project.id === parseInt(projectId));
                    project.addEventListener("click", () => {
                        userInterface.renderProject(projectData);
                    });
                });
                const deleteProject = document.querySelectorAll(".newProjectDeleteButton");
                deleteProject.forEach(project => {
                    project.addEventListener("click", () => {
                        console.log("pre:", projectsList)
                        newProject.deleteProject();
                        console.log("post:",projectsList);
                        userInterface.renderProjectList();
                    })
                })
            }
            sideColumnSecondChild.removeChild(newNameContainer);
        });
        newNameCancelButton.addEventListener("click", () => {
            sideColumnSecondChild.removeChild(newNameContainer);
        });
    })


    const addTask = document.getElementById("mainSquareTitleIconChild");
    const mainSquareTasksChild = document.getElementById("mainSquareTasksChild");
    addTask.addEventListener("click", () => {
        if (mainSquareTasksChild.querySelector(".taskNameContainer")) {
            const taskNameContainer = document.querySelector(".taskNameContainer");
            mainSquareTasksChild.removeChild(taskNameContainer);
            return;
        }
        if (projectsList.length === 0) {
            return;
        }

        userInterface.addANewTaskBox();

        taskNameAdd.addEventListener("click", () => {
            const taskName = taskNameInput.value.trim();
            if (taskName !== "") {
                const newTask = new Task(taskName);
                newTask.createTask();
//TODO fix this, it pushes in the wrong object
                projectsList[projectId - 1].tasks.push(newTask);
            }
            mainSquareTasksChild.removeChild(taskNameContainer);
        })
        taskNameCancel.addEventListener("click", () => {
            mainSquareTasksChild.removeChild(taskNameContainer);
        })
    });

    const parent = document.getElementById("sideColumnFirstChild");
    const dateFilters = parent.querySelectorAll("*");
    dateFilters.forEach(child => {
        child.addEventListener("click", (event) => {
            event.stopPropagation();
            const filter = new Filter(projectsList);
            if (child.id === "sideColumnAllContainer") {
                filter.allFilter();
            } else if (child.id === "sideColumnTodayContainer") {
                filter.todayFilter();
            } else if (child.id === "sideColumnWeekContainer") {
                filter.weekFilter();
            }
        })
    })
}



export default userDynamicInterface;