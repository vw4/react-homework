import {Fragment, memo} from 'react';
import {List, Divider, Paper, ListItem} from '@mui/material';
import {TaskListItem} from "../../components";
import AddTaskItem from "../AddTaskItem";

export default memo(function TasksList({
                                      displayList = [],
                                      maxId,
                                      error,
                                      color,
                                      loading = true,
                                      adding = false,
                                      onTaskAdd,
                                      onTaskToggle,
                                      onTaskEdit,
                                      onTaskDelete,

}) {
    let message;
    if (error) {
        message = <ListItem>Tasks loading failed with error: {error.message}</ListItem>;
    } else if (loading) {
        message = <ListItem>Loading tasks...</ListItem>;
    } else if (!displayList.length) {
        message = <ListItem>No tasks! Well done!</ListItem>;
    }

    return <Paper>
        <List sx={{color}}>
            <AddTaskItem maxId={maxId} onAdd={onTaskAdd} adding={adding}/>
            <Divider/>
            {message}
            {displayList.map((currentTask, index, arr) => <Fragment key={currentTask.id}>
                <TaskListItem
                    {...currentTask}
                    onToggle={() => onTaskToggle(currentTask.id, !currentTask.completed)}
                    onUpdate={(value) => onTaskEdit(currentTask.id, value)}
                    onDelete={() => onTaskDelete(currentTask.id)}
                />
                {index < arr.length - 1 && <Divider/>}
            </Fragment>)}
        </List>
    </Paper>
})