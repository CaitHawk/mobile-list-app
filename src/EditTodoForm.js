import React from 'react';
import TextField from '@mui/material/TextField';
import useInputState from './hooks/useInputState';
import IconButton from '@mui/material/IconButton';
import CancelIcon from '@mui/icons-material/Cancel';

function EditTodoForm({ id, task, toggle, editTodo }) {
    const [value, handleChange, reset] = useInputState(task);
    return (
        <form
            onSubmit={e => {
                e.preventDefault();
                editTodo(id, value);
                reset();
                toggle();
            }}
            style={{ marginLeft: "1rem", width: "100%", display: "flex", justifyContent: "space-around" }}
        >
            <TextField
                value={value}
                onChange={handleChange}
                margin="normal"
                style={{ width: "80%" }}
                autoFocus
            />
            <IconButton aria-label='Edit' onClick={toggle}>
                <CancelIcon />
            </IconButton>
        </form>
    )
}

export default EditTodoForm;