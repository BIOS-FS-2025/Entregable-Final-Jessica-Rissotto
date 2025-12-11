const formatDate = (dateString) => {
  if (!dateString) return 'Sin fecha';
  return new Date(dateString).toLocaleDateString();
};

const TaskList = ({ tasks, onEdit, onDelete }) => {
  if (!tasks.length) {
    return (
      <div className="card">
        <h3 className="card-title">Tus tareas</h3>
        <p className="task-list-empty">
          Aún no tienes tareas creadas. Agrega tu primera tarea con el formulario de la izquierda.
        </p>
      </div>
    );
  }

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">Tus tareas</h3>
      </div>
      {tasks.map((task) => (
        <div key={task._id} className={`task-card task-card-${task.status}`}>
          <div className="task-title">{task.title}</div>
          {task.description && (
            <div style={{ fontSize: '0.9rem' }}>{task.description}</div>
          )}
          <div className="task-meta">
            <span className={`badge badge-status-${task.status}`}>
              {task.status === 'pendiente' && 'Pendiente'}
              {task.status === 'en_progreso' && 'En progreso'}
              {task.status === 'completada' && 'Completada'}
            </span>
            <span className="badge badge-date">
              Fecha límite: {formatDate(task.dueDate)}
            </span>
          </div>
          <div className="task-actions">
            <button
              className="btn btn-ghost"
              onClick={() => onEdit(task)}
            >
              Editar
            </button>
            <button
              className="btn btn-danger"
              onClick={() => onDelete(task._id)}
            >
              Eliminar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
