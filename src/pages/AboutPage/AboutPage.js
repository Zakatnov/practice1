import React from 'react';
import { useParams } from 'react-router-dom';
import projectStore from '../../store/projectStore';
import Header from '../../components/Header/Header';


const AboutPage = () => {
  const { projectId } = useParams();
  const project = projectStore.projects.find(p => p.id === projectId);

  return (
    <div>
      <Header />
      <div>
        <h1>{project?.name}</h1>
      </div>
    </div>
  );
};

export default AboutPage;