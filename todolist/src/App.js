import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import { Footer } from './MyComponents/Footer';
import {TodoItem} from './MyComponents/TodoItem';
import { Todos } from './MyComponents/Todos';
import React, { useState } from 'react';

function App() {

    const onDelete = (todo)=>{
        console.log("i am on delete", todo);
        // in react we can delete like this using inndex , in other javascript and angular like we can , in react we can use [use state] to delete , by this way it will only show delete msg in console and it will not delete from the ui
        //  let index = todos.indexOf(todo);
        //  todos.splice(index,1);

        setTodos(todos.filter((ee)=>{
          return ee!==todo;
        }));

    }

    const [todos, setTodos] = useState([
      {
        sno:1,
        title: "Go to the market",
        desc: "you need to go to the market to get this job done "
      },
      {
        sno:2,
        title: "Go to the mall",
        desc: "you need to go to the mall to get this job done "
      },
      {
        sno:3,
        title: "Go to the charbagh",
        desc: "you need to go to the charbagh to get this job done "
      },
  
    ]);

  

  return (
    <>
    <Header title="My Todos List" searchBar={false}/>
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/>
    </>
  );
}

export default App;
