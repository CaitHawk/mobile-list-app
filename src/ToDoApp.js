import React, { useState } from 'react';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import { uuid } from 'uuidv4';

function ToDoApp() {
    const initialTodos = [
        { id: 1, task: "Clean Fishtank", completed: false },
        { id: 2, task: "Wash Car", completed: true },
        { id: 3, task: "Grow Beard", completed: false }
    ];
    const [todos, setTodos] = useState(initialTodos);
    const addTodo = newTodoText => {
        setTodos([...todos, { id: uuid, task: newTodoText, completed: false }]);
    }
    const removeTodo = todoId => {
        const updatedTodos = todos.filter(todo => todo.id !== todoId);
        setTodos(updatedTodos);
    }
    const toggleTodo = todoId => {
        const updatedTodos = todos.map(todo =>
            todoId === todo.id ? {...todo, completed: !todo.completed } : todo
        );
        setTodos(updatedTodos);
    }
    const editTodo = (todoId, newTask) => {
        const updatedTodos = todos.map(todo => 
            todoId === todo.id ? {...todo, task: newTask} : todo
        );
        setTodos(updatedTodos)
    }

    return (
        <Paper
            style={{
                padding: 0,
                margin: 0,
                height: "100vh",
                backgroundColor: "#fafafa"
            }}
            elevation={0}
        >
            <AppBar color='error' position='static' style={{ height: "64px" }}>
                <Toolbar>
                    <Typography color='inherit'>To Dos with hooks</Typography>
                </Toolbar>
            </AppBar>
            <Grid container justifyContent="center" style={{ marginTop: "1rem"}}>
                <Grid item xs={11} md={8} lg={4}>
                    <ToDoForm addTodo={addTodo} />
                    <ToDoList 
                        todos={todos}
                        removeTodo={removeTodo}
                        toggleTodo={toggleTodo}
                        editTodo={editTodo}
                    />
                </Grid>
            </Grid>
        </Paper>
    );
};

export default ToDoApp;