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
  