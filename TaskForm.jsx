import { useState, useEffect } from 'react';

const TaskForm = ({ onSubmit, initialData }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('pendiente');
  const [dueDate, setDueDate] = useState('');

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title || '');
      setDescription(initialData.description || '');
      setStatus(initialData.status || 'pendiente');
      setDueDate(initialData.dueDate ? initialData.dueDate.slice(0, 10) : '');
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, description, status, dueDate });
    if (!initialData) {
      setTitle('');
      setDescription('');
      setStatus('pendiente');
      setDueDate('');
    }
  };

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">
          {initialData ? 'Editar tarea' : 'Nueva tarea'}
        </h3>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Título</label>
          <input
            id="title"
            placeholder="Ej: Preparar presentación del proyecto"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Descripción</label>
          <textarea
            id="description"
            placeholder="Detalles adicionales de la tarea"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="status">Estado</label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="pendiente">Pendiente</option>
            <option value="en_progreso">En progreso</option>
            <option value="completada">Completada</option>
          </select>
        </div>
        <div>
          <label htmlFor="dueDate">Fecha límite</label>
          <input
            id="dueDate"
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>
        <button className="btn btn-primary mt-md" type="submit">
  {initialData ? '💾 Guardar cambios' : '➕ Agregar tarea'}
</button>

      </form>
    </div>
  );
};

export default TaskForm;
