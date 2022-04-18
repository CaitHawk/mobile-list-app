import React from 'react';
import Todo from './Todo';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';


function ToDoList({ todos, removeTodo, toggleTodo, editTodo }) {
    if (todos.length) {
        return (
            <Paper>
                <List>
                    {todos.map((todo, i) => (
                        <>
                            <Todo
                                {...todo}
                                key={todo.id}
                                removeTodo={removeTodo}
                                toggleTodo={toggleTodo}
                                editTodo={editTodo}
                            />
                            {i < todos.length - 1 && <Divider />}
                        </>
                    ))}
                </List>
            </Paper>
        )
    }
    return null;

}

export default ToDoList;