function createHeader() {
    const header = document.createElement("header");
    const headerChildrenContainer = document.createElement("div");
    const headerIcon = document.createElement("i"); 
    const headerTitle = document.createElement("div");

    header.appendChild(headerChildrenContainer);
    headerChildrenContainer.appendChild(headerIcon);
    headerChildrenContainer.appendChild(headerTitle);

    header.setAttribute("id", "header");
    headerChildrenContainer.setAttribute("id", "headerChildrenContainer");
    headerIcon.setAttribute("id", "headerIcon"); 
    headerTitle.setAttribute("id", "headerTitle");

    return header;
}

function createSideColumn() {
    const sideColumn = document.createElement("div");
    const sideColumnFirstChild = document.createElement("div");
    const sideColumnAllContainer = document.createElement("div");
    const sideColumnAllIcon = document.createElement("div");
    const sideColumnAllText = document.createElement("div");
    const sideColumnTodayContainer = document.createElement("div");
    const sideColumnTodayIcon = document.createElement("div");
    const sideColumnTodayText = document.createElement("div");
    const sideColumnWeekContainer = document.createElement("div");
    const sideColumnWeekIcon = document.createElement("div");
    const sideColumnWeekText = document.createElement("div");
    const sideColumnSecondChild = document.createElement("div");
    const sideColumnAddProjectContainer = document.createElement("div");
    const sideColumnAddProjectIcon = document.createElement("div");
    const sideColumnAddProjectText = document.createElement("div");

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

    sideColumn.setAttribute("id", "sideColumn");
    sideColumnFirstChild.setAttribute("id", "sideColumnFirstChild");
    sideColumnAllContainer.setAttribute("id", "sideColumnAllContainer");
    sideColumnAllIcon.setAttribute("id", "sideColumnAllIcon");
    sideColumnAllText.setAttribute("id", "sideColumnAllText");
    sideColumnTodayContainer.setAttribute("id", "sideColumnTodayContainer");
    sideColumnTodayIcon.setAttribute("id", "sideColumnTodayIcon");
    sideColumnTodayText.setAttribute("id", "sideColumnTodayText");
    sideColumnWeekContainer.setAttribute("id", "sideColumnWeekContainer");
    sideColumnWeekIcon.setAttribute("id", "sideColumnWeekIcon");
    sideColumnWeekText.setAttribute("id", "sideColumnWeekText");
    sideColumnSecondChild.setAttribute("id", "sideColumnSecondChild");
    sideColumnAddProjectContainer.setAttribute("id", "sideColumnAddProjectContainer");
    sideColumnAddProjectIcon.setAttribute("id", "sideColumnAddProjectIcon");
    sideColumnAddProjectText.setAttribute("id", "sideColumnAddProjectText");

    return sideColumn;
}

function createMainSquare() {
    const mainSquare = document.createElement("div");
    const mainSquareChildrenContainer = document.createElement("div");
    const mainSquareTitleChild = document.createElement("div");
    const mainSquareTasksChild = document.createElement("div");
    const mainSquareTitleTextChild = document.createElement("div");
    const mainSquareTitleIconChild = document.createElement("div");

    mainSquare.appendChild(mainSquareChildrenContainer);
    mainSquareChildrenContainer.appendChild(mainSquareTitleChild);
    mainSquareChildrenContainer.appendChild(mainSquareTasksChild);
    mainSquareTitleChild.appendChild(mainSquareTitleTextChild);
    mainSquareTitleChild.appendChild(mainSquareTitleIconChild);

    mainSquare.setAttribute("id", "mainSquare");
    mainSquareChildrenContainer.setAttribute("id", "mainSquareChildrenContainer");
    mainSquareTitleChild.setAttribute("id", "mainSquareTitleChild");
    mainSquareTasksChild.setAttribute("id", "mainSquareTasksChild");
    mainSquareTitleTextChild.setAttribute("id", "mainSquareTitleTextChild");
    mainSquareTitleIconChild.setAttribute("id", "mainSquareTitleIconChild");

    return mainSquare;
}

function userInterface() {
    const content = document.getElementById("content");
    content.appendChild(createHeader());
    content.appendChild(createSideColumn());
    content.appendChild(createMainSquare());
}

export default userInterface;