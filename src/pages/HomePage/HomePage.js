import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import projectStore from '../../store/projectStore';
import Header from '../../components/Header/Header';
import NewProjectModal from '../../components/ProjectModal/ProjectModal';
import Grid from '../../components/Grid/Grid';
import Button from '../../components/UI/Button/Button';
import Search from '../../components/UI/Search/Search';
import trash from '../../icons/Trash.png';
import styles from './HomePage.module.css';

const MainPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const DeleteSelectedProjects = () => {
    projectStore.removeSelectedProjects();
  };

  const SelectAllProjects = (e) => {
    if (e.target.checked) {
      projectStore.chosseAllProjects();
    } else {
      projectStore.clearAllProjects();
    }
  };

  const filteredProjects = projectStore.projects.filter(project =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleNavigate = (project) => {
    navigate(`/about/${project.id}`);
  };
  // toggleSelectProject
  const projectCount = filteredProjects.length;

  return (
    <div className={styles.mainPage}>
      <Header />
      <div className={styles.controlBlock}>
        <Button onClick={() => projectStore.switchModal()} />
        <Search onSearchChange={setSearchTerm} />
      </div>
      <div className={styles.projectGridContainer}>
        {projectStore.projects.length > 0 && (
          <div className={styles.projectDeleteControl}>
            <input
              type="checkbox"
              onChange={SelectAllProjects}
              checked={projectStore.selectedProjects.size === projectStore.projects.length}
            />
            <button
              className={styles.deleteButton}
              onClick={DeleteSelectedProjects}
            >
              <img src={trash} alt="Delete" />
            </button>
            <div className={styles.projectCount}>{projectCount} items</div>
          </div>
        )}
        <Grid
          items={filteredProjects}
          onItemClick={handleNavigate}
          renderItem={(project) => (
            <div key={project.id}>
              <div className={styles.projectActions}>
                <input
                  type="checkbox"
                  className={styles.checkbox}
                  onChange={() => projectStore.switchSelectProject(project.id)}
                  onClick={e => e.stopPropagation()}
                  checked={projectStore.selectedProjects.has(project.id)}
                />
                <button onClick={(e) => { e.stopPropagation(); /* Реализовать функционал редактирования */ }} className={styles.editButton}>⋮</button>
              </div>
              <div className={styles.projectName}>{project.name}</div>
            </div>
          )}
        />
      </div>
      {projectStore.isModalOpen && <NewProjectModal />}
    </div>
  );
};

export default observer(MainPage);





