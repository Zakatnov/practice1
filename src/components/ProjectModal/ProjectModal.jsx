import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import projectStore from '../../store/projectStore';
import styles from './ProjectModal.module.css';

const NewProjectModal = () => {
  const [name, setName] = useState('');
  const [measurement, setMeasurement] = useState('Metric');
  const [error, setError] = useState('');

  const handleNameChange = (e) => {
    const value = e.target.value;
    if (/^[a-zA-Z0-9]*$/.test(value) && value.length <= 150) {
      setName(value);
      setError('');
    } else {
      setError('cant be more than 150ch');
    }
  };

  const handleCreate = () => {
    if (name === '') {
      setError('Name is taken.');
    } else {
      projectStore.addProject(name, measurement);
      projectStore.switchModal();
    }
  };

  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h2>New Project</h2>
          <button className={styles.closeButton} onClick={() => projectStore.switchModal()}>×</button>
        </div>
        <div className={styles.modalBody}>
          <div className={styles.formGroup}>
            <label htmlFor="projectName">Name</label>
            <input
              id="projectName"
              type="text"
              value={name}
              onChange={handleNameChange}
              placeholder="New project"
            />
            {error && <div className={styles.error}>{error}</div>}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="measurement">Measurement system</label>
            <select
              id="measurement"
              value={measurement}
              onChange={(e) => setMeasurement(e.target.value)}
            >
              <option value="Metric">Metric</option>
              <option value="Imperial">Imperial</option>
            </select>
          </div>
        </div>
        <div className={styles.modalFooter}>
          <button onClick={handleCreate}>Create</button>
          <button onClick={() => projectStore.switchModal()}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default observer(NewProjectModal);