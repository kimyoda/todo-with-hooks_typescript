type Todo = {
  id: string;
  task: string;
  isCompleted: boolean;
};

type TodoProps = {
  todo: Todo;
  handleDeleteTodo: (id: string) => void;
};

export const Row = ({
  todo: { task, isCompleted, id },
  handleDeleteTodo,
}: TodoProps) => (
  <div>
    <p>{task}</p>
    <div>
      <button aria-label="Delete a todo" onClick={() => handleDeleteTodo(id)}>
        X
      </button>
      <input type="checkbox" checked={isCompleted} onChange={() => null} />
    </div>
  </div>
);
