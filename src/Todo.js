import React from 'react';
import EditTodoForm from './EditTodoForm'
import useToggleState from './hooks/useToggleState';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function Todo({ id, task, completed, removeTodo, toggleTodo, editTodo }) {
    const [isEditing, toggle] = useToggleState(false);
    return (
        <ListItem style={{height: '64px'}} >
            {isEditing ? (
                <EditTodoForm
                    id={id}
                    task={task}
                    toggle={toggle}
                    editTodo={editTodo}
                />
            ) : (
                <>
                    <Checkbox tabIndex={-1} checked={completed} color='error' onClick={() => toggleTodo(id)} />
                    <ListItemText style={{ textDecoration: completed ? "line-through" : "none" }}>
                        {task}
                    </ListItemText>
                    <ListItemSecondaryAction>
                        <IconButton aria-label='Delete' onClick={() => removeTodo(id)}>
                            <DeleteIcon />
                        </IconButton>
                        <IconButton aria-label='Edit' onClick={toggle}>
                            <EditIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </>
            )}
        </ListItem >
    )
}

export default Todo;