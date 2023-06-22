function createHeader() {
    const header = document.createElement("header");
    const headerChildrenContainer = document.createElement("div");
    const headerIcon = document.createElement("i"); 
    const headerTitle = document.createElement("h3");

    header.appendChild(headerChildrenContainer);
    headerChildrenContainer.appendChild(headerIcon);
    headerChildrenContainer.appendChild(headerTitle);

    header.id = "header";
    headerChildrenContainer.id = "headerChildrenContainer";
    headerIcon.id = "headerIcon"; 
    headerTitle.id = "headerTitle";

    headerIcon.classList.add("fa-solid");
    headerIcon.classList.add("fa-fish");
    headerTitle.textContent = "ToDo App";

    return header;
}

function createSideColumn() {
    const sideColumn = document.createElement("div");
    const sideColumnFirstChild = document.createElement("div");
    const sideColumnAllContainer = document.createElement("div");
    const sideColumnAllIcon = document.createElement("i");
    const sideColumnAllText = document.createElement("p");
    const sideColumnTodayContainer = document.createElement("div");
    const sideColumnTodayIcon = document.createElement("i");
    const sideColumnTodayText = document.createElement("p");
    const sideColumnWeekContainer = document.createElement("div");
    const sideColumnWeekIcon = document.createElement("i");
    const sideColumnWeekText = document.createElement("p");
    const sideColumnSecondChild = document.createElement("div");
    const sideColumnAddProjectContainer = document.createElement("div");
    const sideColumnAddProjectIcon = document.createElement("i");
    const sideColumnAddProjectText = document.createElement("h4");

    sideColumn.appendChild(sideColumnFirstChild);
    sideColumnFirstChild.appendChild(sideColumnAllContainer);
    sideColumnAllContainer.appendChild(sideColumnAllIcon);
    sideColumnAllContainer.appendChild(sideColumnAllText);
    sideColumnFirstChild.appendChild(sideColumnTodayContainer);
    sideColumnTodayContainer.appendChild(sideColumnTodayIcon);
    sideColumnTodayContainer.appendChild(sideColumnTodayText);
    sideColumnFirstChild.appendChild(sideColumnWeekContainer);
    sideColumnWeekContainer.appendChild(sideColumnWeekIcon);
    sideColumnWeekContainer.appendChild(sideColumnWeekText);
    sideColumn.appendChild(sideColumnSecondChild);
    sideColumnSecondChild.appendChild(sideColumnAddProjectContainer);
    sideColumnAddProjectContainer.appendChild(sideColumnAddProjectIcon);
    sideColumnAddProjectContainer.appendChild(sideColumnAddProjectText);

    sideColumn.id = "sideColumn";
    sideColumnFirstChild.id = "sideColumnFirstChild";
    sideColumnAllContainer.id = "sideColumnAllContainer";
    sideColumnAllIcon.id = "sideColumnAllIcon";
    sideColumnAllText.id = "sideColumnAllText";
    sideColumnTodayContainer.id = "sideColumnTodayContainer";
    sideColumnTodayIcon.id = "sideColumnTodayIcon";
    sideColumnTodayText.id = "sideColumnTodayText";
    sideColumnWeekContainer.id = "sideColumnWeekContainer";
    sideColumnWeekIcon.id = "sideColumnWeekIcon";
    sideColumnWeekText.id = "sideColumnWeekText";
    sideColumnSecondChild.id = "sideColumnSecondChild";
    sideColumnAddProjectContainer.id = "sideColumnAddProjectContainer";
    sideColumnAddProjectIcon.id = "sideColumnAddProjectIcon";
    sideColumnAddProjectText.id = "sideColumnAddProjectText";

    sideColumnAllText.textContent = "All";
    sideColumnTodayText.textContent = "Today";
    sideColumnWeekText.textContent = "Week";
    sideColumnAddProjectText.textContent = "Add Project";

    sideColumnAllIcon.classList.add("fa-solid");
    sideColumnAllIcon.classList.add("fa-globe");
    sideColumnTodayIcon.classList.add("fa-solid");
    sideColumnTodayIcon.classList.add("fa-calendar-day");
    sideColumnWeekIcon.classList.add("fa-solid");
    sideColumnWeekIcon.classList.add("fa-calendar-week");
    sideColumnAddProjectIcon.classList.add("fa-solid");
    sideColumnAddProjectIcon.classList.add("fa-plus");

    return sideColumn;
}

function createMainSquare() {
    const mainSquare = document.createElement("div");
    const mainSquareChildrenContainer = document.createElement("div");
    const mainSquareTitleChild = document.createElement("div");
    const mainSquareTasksChild = document.createElement("div");
    const mainSquareTitleTextChild = document.createElement("h4");
    const mainSquareTitleIconChild = document.createElement("i");

    mainSquare.appendChild(mainSquareChildrenContainer);
    mainSquareChildrenContainer.appendChild(mainSquareTitleChild);
    mainSquareChildrenContainer.appendChild(mainSquareTasksChild);
    mainSquareTitleChild.appendChild(mainSquareTitleTextChild);
    mainSquareTitleChild.appendChild(mainSquareTitleIconChild);

    mainSquare.id = "mainSquare";
    mainSquareChildrenContainer.id = "mainSquareChildrenContainer";
    mainSquareTitleChild.id = "mainSquareTitleChild";
    mainSquareTasksChild.id = "mainSquareTasksChild";
    mainSquareTitleTextChild.id = "mainSquareTitleTextChild";
    mainSquareTitleIconChild.id = "mainSquareTitleIconChild";

    mainSquareTitleTextChild.textContent = "Variable Text";

    mainSquareTitleIconChild.classList.add("fa-solid");
    mainSquareTitleIconChild.classList.add("fa-plus");

    return mainSquare;
}

function createBody() {
    const sideAndMainContainer = document.createElement("div");

    sideAndMainContainer.id = "sideAndMainContainer";

    sideAndMainContainer.appendChild(createSideColumn());
    sideAndMainContainer.appendChild(createMainSquare());

    return sideAndMainContainer;
}

function userStaticInterface() {
    const content = document.getElementById("content");
    const contentContainer = document.createElement("div");

    contentContainer.id = "contentContainer";

    contentContainer.appendChild(createHeader());
    contentContainer.appendChild(createBody());

    content.appendChild(contentContainer);
}

export {createMainSquare};
export default userStaticInterface;