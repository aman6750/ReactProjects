import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import { Footer } from './MyComponents/Footer';
import {TodoItem} from './MyComponents/TodoItem';
import { Todos } from './MyComponents/Todos';
import { AddTodo } from './MyComponents/AddTodo';
import React, { useState , useEffect } from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

function App() {

    let initTodo;
      if(localStorage.getItem("todos")===null){
        initTodo = [];
      }else{
        initTodo  = JSON.parse(localStorage.getItem("todo"));
      }

    const onDelete = (todo)=>{
        console.log("i am on delete", todo);
        // in react we can delete like this using inndex , in other javascript and angular like we can , in react we can use [use state] to delete , by this way it will only show delete msg in console and it will not delete from the ui
        //  let index = todos.indexOf(todo);
        //  todos.splice(index,1);

        setTodos(todos.filter((ee)=>{
          return ee!==todo;
        }));
        localStorage.setItem("todos",JSON.stringify(todos));

    }

    const addTodo=(title,desc)={
      console.log("hello" ,title,desc)
      let sno;
        if(todos.length==0){
          sno=0;
        }else{
          sno = todos[todos.length-1].sno+1;
        }      
      const myTodo = {
        sno:sno,
        title :title,
        desc: desc,
      }
      setTodos([...todos,myTodo]);
      console.log(myTodo);

     


  }

    const [todos, setTodos] = useState([initTodo]);

      useEffect(()=>{
        localStorage.setItem("todos",JSON.stringify(todos));
      },[todos]) 
  

  return (
    <>
    <Router>
    <Header title="My Todos List" searchBar={false}/>
      <Switch> 
      <Route path="/">
        <Home/>
      </Route>

      <Route path="/about"> 

      </Route>

      </Switch>

    <AddTodo addTodo={addTodo}/>
    <Todos todos={todos} onDelete={onDelete}/>

    <Footer/>
    </Router>
    </>
  );
}

export default App;
