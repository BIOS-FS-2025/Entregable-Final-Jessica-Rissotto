import { useEffect, useState } from 'react';
import api from '../services/api';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [editing, setEditing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const loadTasks = async () => {
    setLoading(true);
    try {
      const { data } = await api.get('/tasks');
      setTasks(data);
    } catch (err) {
      setError('Error cargando tareas');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const createTask = async (taskData) => {
    try {
      await api.post('/tasks', taskData);
      await loadTasks();
    } catch (err) {
      setError('Error creando tarea');
    }
  };

  const updateTask = async (taskData) => {
    try {
      await api.put(`/tasks/${editing._id}`, taskData);
      setEditing(null);
      await loadTasks();
    } catch (err) {
      setError('Error actualizando tarea');
    }
  };

  const deleteTask = async (id) => {
    if (!window.confirm('¿Seguro que quieres eliminar esta tarea?')) return;
    try {
      await api.delete(`/tasks/${id}`);
      await loadTasks();
    } catch (err) {
      setError('Error eliminando tarea');
    }
  };

  return (
    <>
      <h2 className="page-title">Panel de tareas</h2>
      <p className="page-subtitle">
        Gestiona tus tareas personales. Todo lo que ves aquí está protegido por autenticación con JWT.
      </p>
      {error && <p className="error-text mt-sm">{error}</p>}
      <div className="dashboard-layout mt-md">
        <div>
          {editing ? (
            <TaskForm initialData={editing} onSubmit={updateTask} />
          ) : (
            <TaskForm onSubmit={createTask} />
          )}
        </div>
        <div>
          {loading ? <p>Cargando...</p> : (
            <TaskList
              tasks={tasks}
              onEdit={(task) => setEditing(task)}
              onDelete={deleteTask}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
