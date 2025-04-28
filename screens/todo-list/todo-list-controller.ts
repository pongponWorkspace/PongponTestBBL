import React from "react";

export type TodoItem = {
    id: string;
    task: string;
    completed: boolean;
}

const useTodoListController = () => {

  const todoList: TodoItem[] = [
    { id: '1', task: "Buy groceries", completed: false },
    { id: '2', task: "Walk the dog", completed: false },
    { id: '3', task: "Read a book", completed: false },
  ];

  const [todoItems, setTodoItems] = React.useState<TodoItem[]>(todoList);
  const [itemName, setItemName] = React.useState<string>('');

  const addTodoItem = (task: string) => {
    const newTodoItem: TodoItem = {
      id: (todoItems.length + 1).toString(),
      task,
      completed: false,
    };
    setTodoItems([...todoItems, newTodoItem]);
    setItemName('');
  }

  const removeTodoItem = (id: string) => {
    const updatedTodoItems = todoItems.filter(item => item.id !== id);
    setTodoItems(updatedTodoItems);
  }

  const updatedCheckItems = (id: string, isChecked: boolean) => {
    const updatedTodoItems = todoItems.map(item => {
      if (item.id === id) {
        return { ...item, completed: isChecked };
      }
      return item;
    });
    setTodoItems(updatedTodoItems);
  }

  const clearAll = () => {
    console.log(todoItems);
    setTodoItems([]);
  }

  return {
    todoItems,
    setTodoItems,
    addTodoItem,
    removeTodoItem,
    setItemName,
    itemName,
    updatedCheckItems,
    clearAll,
  };
}
export default useTodoListController;