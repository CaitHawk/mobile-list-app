import React from 'react';
import Todo from './Todo';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';


function ToDoList(props) {
    return (
        <Paper>
            <List>
                {props.todos.map(todo => (
                    <>
                        <Todo task={todo.task} key={todo.id} completed={todo.completed} />
                        <Divider />
                    </>
                ))}
            </List>
        </Paper>
    )

}

export default ToDoList;