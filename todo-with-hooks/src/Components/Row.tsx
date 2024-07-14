type Todo = {
  id: string;
  task: string;
  isCompleted: boolean;
};

type TodoProps = {
  todo: Todo;
  handleDeleteTodo: (id: string) => void;
  handleCheckTodo: (id: string) => void;
};

export const Row = ({
  todo: { task, isCompleted, id },
  handleDeleteTodo,
  handleCheckTodo,
}: TodoProps) => (
  // $을 사용하여 tailwindcss를 적용시 공백을 확인 후 체크하기
  <div
    className={`flex w-full p-4 mb-2 justify-between items-center ${
      isCompleted ? "bg-gray-400" : "bg-green-300"
    }`}
  >
    <p
      className={`ml-2 text-xl font-sans font-medium 
      ${isCompleted ? "text-white line-through" : "text-gray-800"} `}
    >
      {task}
    </p>
    <div className="w-1/6 flex justify-between items-center mr-2">
      <button
        className="h-7 w-7 flex justify-center items-center bg-red-400 hover:bg-red-600 text-white
        font-bold rounded"
        aria-label="Delete a todo"
        onClick={() => handleDeleteTodo(id)}
      >
        X
      </button>
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={() => handleCheckTodo(id)}
        className="form-checkbox h-7 w-7"
      />
    </div>
  </div>
);
