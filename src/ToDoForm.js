import React from 'react';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import useInputState from './hooks/useInputState';

function ToDoForm({ addTodo }) {
    const [value, handleChange, reset] = useInputState("");
    return (
        <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    addTodo(value);
                    reset();
                }}
            >
                <TextField value={value} onChange={handleChange} margin="normal" label="Add new todo" fullWidth />
            </form>
        </Paper>
    );
}

export default ToDoForm;