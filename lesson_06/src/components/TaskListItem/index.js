import {useState} from 'react';
import {ListItemButton, CircularProgress, ListItemText, IconButton} from '@mui/material';
import ItemEditForm from "../TaskEditItem";
import {Delete as DeleteIcon, Edit as EditIcon} from "@mui/icons-material";

export default function TaskListItem({
                                             value = '',
                                             pendingValue = '',
                                             completed = false,
                                             flags: {
                                                 updating = false,
                                                 deleting = false,
                                             } = {},
                                             onUpdate,
                                             onDelete,
                                             onToggle,
}) {
    const [editMode, setEditMode] = useState(false);

    const handleOnEditClick = (e) => {
        e.stopPropagation();
        setEditMode(true);
    }

    const handleOnClick = (e) => {
        e.stopPropagation();
        onToggle();
    }

    const handleOnDeleteClick = (e) => {
        e.stopPropagation();
        onDelete();
    }

    const handleOnSubmit = (newValue) => {
        setEditMode(false);
        if (newValue && value !== newValue) {
            onUpdate(newValue);
        }
    }

    if (editMode) {
        return <ItemEditForm defaultValue={value} editMode={true} onSubmit={handleOnSubmit} />;
    }

    return <ListItemButton
        style={{ textDecoration : !completed ? 'none' : 'line-through'}}
        onClick={handleOnClick}
        disabled={updating || deleting}
    >
        <ListItemText primary={updating ? pendingValue || value : value}/>
        <IconButton aria-label="edit" disabled={deleting || updating} onClick={handleOnEditClick}>
            {updating ? <CircularProgress size={24} color='inherit'/> : <EditIcon/>}
        </IconButton>
        <IconButton aria-label="delete" disabled={deleting || updating} onClick={handleOnDeleteClick}>
            {deleting ? <CircularProgress size={24} color='inherit'/> : <DeleteIcon/>}
        </IconButton>
    </ListItemButton>;
}