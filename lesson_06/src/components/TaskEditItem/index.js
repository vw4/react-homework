import {IconButton, ListItem, TextField} from "@mui/material";
import {Check as CheckIcon, Clear as ClearIcon, Add as AddIcon} from "@mui/icons-material";
import {Fragment, useState} from "react";

export default function TaskEditItem({
                                         defaultValue = '',
                                         editMode = true,
                                         disabled = false,
                                         onSubmit,
}) {
    const [value, setValue] = useState(defaultValue);

    const handleKeyDown = (e) => {
        switch (e.key) {
            case 'Enter': return handleOnSave(e);
            case 'Escape': return handleOnCancel(e);
        }
    }

    const handleOnSave = (e) => {
        e.stopPropagation();
        if (!value) {
            return;
        }
        onSubmit(value);
    }

    const handleOnCancel = (e) => {
        e.stopPropagation();
        if (!editMode) {
            return;
        }
        onSubmit();
    }

    return <ListItem>
        <TextField
            variant="standard"
            fullWidth
            disabled={disabled}
            value={value}
            onKeyDown={handleKeyDown}
            onChange={(e) => setValue(e.target.value)}
            placeholder={editMode ? '' : 'Add new task'}
            autoFocus
        />
        {editMode
            ? <Fragment>
                <IconButton aria-label="confirm" disabled={disabled || !value} onClick={handleOnSave}>
                    <CheckIcon/>
                </IconButton>
                <IconButton aria-label="cancel" disabled={disabled} onClick={handleOnCancel}>
                    <ClearIcon/>
                </IconButton>
            </Fragment>
            : <IconButton aria-label="add" disabled={disabled || !value} onClick={handleOnSave}>
                <AddIcon/>
            </IconButton>
        }
    </ListItem>
}