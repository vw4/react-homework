import {IconButton, ListItem, TextField} from "@mui/material";
import {Check as CheckIcon, Clear as ClearIcon, Add as AddIcon} from "@mui/icons-material";
import {Fragment, useRef} from "react";

export default function TaskEditItem({
                                         value = '',
                                         editMode = true,
                                         disabled = false,
                                         onSubmit = () => {},
}) {
    const inputElement = useRef();

    const handleKeyDown = (e) => {
        switch (e.key) {
            case 'Enter': return handleOnSave(e);
            case 'Escape': return handleOnCancel(e);
        }
    }

    const handleOnSave = (e) => {
        e.stopPropagation();
        onSubmit(inputElement.current.value);
    }

    const handleOnCancel = (e) => {
        e.stopPropagation();
        onSubmit();
    }

    return <ListItem>
        <TextField
            variant="standard"
            fullWidth
            disabled={disabled}
            defaultValue={value}
            inputRef={inputElement}
            onKeyDown={handleKeyDown}
            placeholder={editMode ? '' : 'Add new task'}
            autoFocus
        />
        {editMode
            ? <Fragment>
                <IconButton aria-label="confirm" disabled={disabled} onClick={handleOnSave}>
                    <CheckIcon/>
                </IconButton>
                <IconButton aria-label="cancel" disabled={disabled} onClick={handleOnCancel}>
                    <ClearIcon/>
                </IconButton>
            </Fragment>
            : <IconButton aria-label="add" disabled={disabled} onClick={handleOnSave}>
                <AddIcon/>
            </IconButton>
        }
    </ListItem>
}