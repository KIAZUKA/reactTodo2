import React,{useState} from "react";
import "./styles.css";
import {InputTodo}from './components/inputTodo';
import {IncompleteTodos}from './components/IncompleteTodos';
import {CompleteTodos}from'./components/CompleteTodos';


export const App = () =>{
  const [todoText,setTodoText] = useState('');
  const [incompleteTodos,setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([])

  const onChangeTodoText =(event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText ==="") return;
    const newTodos = [...incompleteTodos, todoText];
    setCompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
   const newTodos = [...incompleteTodos];
   newTodos.splice(index, 1);
   setIncompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
  newIncompleteTodos.splice(index, 1);
 

    const newCompleteTodos = [...completeTodos,incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);

  }

  return(
   <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText} 
        onClick={onClickAdd}
      />
      <IncompleteTodos
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos
      completeTodos={completeTodos}
      onClickBack={onClickBack}
      />
   </>
  );
};



