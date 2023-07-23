export function setLocalStorage(projectsList) {
    try {
        const arrayStringified = JSON.stringify(projectsList);
        localStorage.setItem("projectsList", arrayStringified);
    } catch (error) {
        console.error("Error, can't convert the object in a JSON string:", error);
    }
}

export function getLocalStorage() {
    try {
        const arrayStringified = localStorage.getItem("projectsList");
        if (arrayStringified) {
            return JSON.parse(arrayStringified);
        } else {
            return null;
        }
    } catch (error) {
        console.error("Error while trying to get the data from localStorage:", error);
        return null;
    }
}

