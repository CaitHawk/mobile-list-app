import React, { useState } from 'react';
import ToDoList from './ToDoList';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';

function ToDoApp() {
    const initialTodos = [
        { id: 1, task: "Clean Fishtank", completed: false },
        { id: 2, task: "Wash Car", completed: true },
        { id: 3, task: "Grow Beard", completed: false }
    ];
    const [todos, setTodos] = useState(initialTodos);
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
            <AppBar color='primary' position='static' style={{ height: "64px" }}>
                <Toolbar>
                    <Typography color='inherit'>To Dos with hooks</Typography>
                </Toolbar>
            </AppBar>
            <ToDoList todos={todos} />
        </Paper>
    );
};

export default ToDoApp;