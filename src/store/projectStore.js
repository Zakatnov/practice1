import { makeAutoObservable } from "mobx";

class ProjectStore {
  projects = [];
  selectedProjects = new Set();
  isModalOpen = false;

  constructor() {
    makeAutoObservable(this);
    this.InitialData();
  }

  InitialData() {
    const initialProjects = [
      {
        id: '1',
        name: 'Project 1',
        measurement: 'Metric',
      },
      {
        id: '2',
        name: 'Project 2',
        measurement: 'Imperial',
      },
      {
        id: '3',
        name: 'Project 3',
        measurement: 'Metric',
      },
      {
        id: '4',
        name: 'Project 4',
        measurement: 'Metric',
      },
      {
        id: '5',
        name: 'Project 5',
        measurement: 'Imperial',
      },
      {
        id: '6',
        name: 'Project 6',
        measurement: 'Imperial',
      },
    ];
    this.projects = initialProjects;
  }

  addProject(name, measurement) {
    const newProject = {
      id: Date.now().toString(),
      name,
      measurement,
    };
    this.projects.push(newProject);
  }

  removeProject(id) {
    this.projects = this.projects.filter(project => project.id !== id);
    this.selectedProjects.delete(id);
  }

  removeSelectedProjects() {
    this.projects = this.projects.filter(project => !this.selectedProjects.has(project.id));
    this.selectedProjects.clear();
  }

  switchModal() {
    this.isModalOpen = !this.isModalOpen;
  }

  switchSelectProject(id) {
    if (this.selectedProjects.has(id)) {
      this.selectedProjects.delete(id);
    } else {
      this.selectedProjects.add(id);
    }
  }

  chosseAllProjects() {
    this.selectedProjects = new Set(this.projects.map(project => project.id));
  }

  clearAllProjects() {
    this.selectedProjects.clear();
  }
}

const projectStore = new ProjectStore();
export default projectStore;
