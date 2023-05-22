const initialState = [
  {
    id: 1,
    title: "list1",
    complete: false,
  },
  {
    id: 2,
    title: "list2",
    complete: false,
  },
];

export const constans = {
  ADD: "ADD",
  EDIT: "EDIT",
  DELETE: "DELETE",
  COMPLATE: "COMPLATE",
  DELETE_ALL: "DELETE_ALL,",
};
export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case constans.ADD: {
      const newTodo = {
        id: Date.now(),
        title: action.payload,
        complete: false,
      };
      return [...state, newTodo];
    }
    case constans.EDIT: {
      const index = state.findIndex((item) => item.id === action.playload);
      console.log(index, "index");
      const todo = Object.assign({}, state[index]);
      todo.title = action.title;
      console.log(todo, "todo");
      const todos = [...state];
      todos.splice(index, 1, todo);
      console.log(todos, "todos");
      return todos;
    }
    case constans.DELETE: {
      const TodoFiltered = state.filter((todo) => {
        return todo.id !== action.payload;
      });
      return TodoFiltered;
    }
    case constans.COMPLATE: {
      console.log(action.payload);
      const complated = state.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
      return complated;
    }

    case constans.DELETE_ALL: {
      return [];
    }

    default:
      return state;
  }
};
