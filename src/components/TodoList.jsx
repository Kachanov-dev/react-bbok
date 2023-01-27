import React from 'react';
import {Todo} from './Todo';

const TodoList = ({todoListData, setDone}) => {
  return (
    <section>
      <h1>Дела</h1>
      <div>
        {todoListData.map((todo) => (
          <Todo {...todo} key={todo.Key} />
        ))}
      </div>
    </section>
  );
};

export {TodoList};
