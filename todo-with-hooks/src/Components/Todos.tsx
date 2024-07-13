import { Row } from "./Row";

import { data } from "../todos";

export const Todos = () => {
  return (
    <section>
      {data.map((todo) => (
        <Row key={todo.id} todo={todo} />
      ))}
    </section>
  );
};
