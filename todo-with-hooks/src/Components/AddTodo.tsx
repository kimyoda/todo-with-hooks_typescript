import { ChangeEvent, FormEvent } from "react";
import { ReactComponent as PlusIcon } from "../assets/svg/plus.svg";

export type AddTodoProps = {
  task: string;
  handleSubmitTodo: (e: FormEvent) => void;
  handleChange: (e: ChangeEvent) => void;
};

export const AddTodo = ({
  task,
  handleSubmitTodo,
  handleChange,
}: AddTodoProps) => {
  return (
    <form onSubmit={handleSubmitTodo}>
      <input type="text" name="task" value={task} onChange={handleChange} />
      <button type="submit" aria-label="Add todo">
        <PlusIcon />
      </button>
    </form>
  );
};
