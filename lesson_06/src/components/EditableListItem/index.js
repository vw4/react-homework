import {useState, useRef, useEffect, Fragment} from 'react';
import {ListItemButton, IconButton, ListItemText, TextField, CircularProgress} from '@mui/material';
import {Edit as EditIcon, Clear as ClearIcon, Check as CheckIcon} from '@mui/icons-material';

export default function EditableListItem({
                                             value = '',
                                             state,
                                             onEdit: onEditCallback = () => {},
                                             onDelete: onDeleteCallback = () => {},
                                             onClick: onClickCallback = () => {},
}) {
    const [editMode, setEditMode] = useState(false);
    const [editBusy, setEditBusy] = useState(false);
    const [deleteBusy, setDeleteBusy] = useState(false);
    const inputElement = useRef();

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            onSave(e);
        }
    }

    const onEdit = (e) => {
        e.stopPropagation();
        setEditMode(true);
    }

    useEffect(() => {!editBusy && setEditMode(false)}, [editBusy]);

    const onSave = (e) => {
        e.stopPropagation();
        setEditBusy(
            true,
            onEditCallback(
                inputElement.current.value,
                () => {
                    setEditBusy(false);
                },
            ),
        );
    }

    const onDelete = (e) => {
        e.stopPropagation();
        setDeleteBusy(
            true,
            onDeleteCallback(() => setDeleteBusy(false)),
        )
    }

    const onClick = () => {
        if (editMode) {
            return;
        }
        setEditBusy(true, onClickCallback(() => setEditBusy(false)));
    }

    return <ListItemButton
        style={{ textDecoration : !state || editMode ? 'none' : 'line-through'}}
        onClick={onClick}
        disabled={editBusy || deleteBusy}
        disableRipple={editMode}
    >
        {editMode
            ? <Fragment>
                <TextField variant="standard" fullWidth defaultValue={value} inputRef={inputElement} onKeyDown={handleKeyDown}/>
                <IconButton aria-label="confirm" onClick={onSave}>
                    {editBusy ? <CircularProgress size={24} color='inherit'/> : <CheckIcon/>}
                </IconButton>
            </Fragment>
            : <Fragment>
                <ListItemText primary={value}/>
                {editBusy && <CircularProgress size={24} color='inherit'/>}
                <IconButton aria-label="edit" onClick={onEdit}>
                    <EditIcon/>
                </IconButton>
                <IconButton aria-label="delete" onClick={onDelete}>
                    {deleteBusy ? <CircularProgress size={24} color='inherit'/> : <ClearIcon/>}
                </IconButton>
            </Fragment>
        }
    </ListItemButton>
}