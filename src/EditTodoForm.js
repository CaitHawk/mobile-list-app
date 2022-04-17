import React from 'react';
import TextField from '@mui/material/TextField';
import useInputState from './hooks/useInputState';

function EditTodoForm({id, task, toggle, editTodo}) {
    const [value, handleChange, reset] = useInputState(task);
    return (
        <form onSubmit={ e => {
            e.preventDefault();
            editTodo(id, value);
            reset();
            toggle();
        }}>
            <TextField
                value={value}
                onChange={handleChange}
                margin="normal"
                fullWidth
            />
        </form>
    )

}

export default EditTodoForm;