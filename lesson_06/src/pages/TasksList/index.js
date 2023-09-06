import {Fragment, useState, useEffect} from 'react';
import {List, Divider, Paper, ListItem} from '@mui/material';
import {TaskEditItem, TaskListItem} from "../../components";
import {getTasks, updateTask, deleteTask, addTask} from "../../services/api";

export default function EditableList() {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    const [adding, setAdding] = useState(false);

    const loadTasks = async () => {
        setLoading(true);
        const response = await getTasks();
        setLoading(false);
        return response.data;
    };

    useEffect(() => {
        loadTasks()
            .then(setTasks)
            .catch(setError);
    }, []);

    const taskById = id => task => task.id === id;

    const setTask = (id, task) => {
        setTasks(prevState => {
            const prevTask = prevState.find(taskById(id));
            return prevState.map(
                currentTask => taskById(id)(currentTask)
                    ? {...prevTask, ...task}
                    : currentTask
            );
        });
    }

    const unsetTask = (id) => {
        setTasks(prevState => prevState.filter(currentTask => currentTask.id !== id));
    }

    const handleToggleTask = (id, completed) => {
        editTask(id, {completed});
    }

    const handleEditTask = (id, value) => {
        editTask(id, {value});
    }

    const editTask = (id, newTask) => {
        setTask(id, {pendingValue: newTask.value, flags: {updating: true}});
        updateTask(id, newTask)
            .then(({data}) => setTask(id, {...data, flags: {}}))
            .catch(error => {
                alert(error.message)
                setTask(id, {pendingValue: null, flags: {updating: false}});
            });
    }

    const handleDeleteTask = (id) => {
        setTask(id, {flags: {deleting: true}});
        deleteTask(id)
            .then(() => unsetTask(id))
            .catch(error => {
                alert(error.message);
                setTask(id, {flags: {}});
            });
    }

    const handleAddTask = (value) => {
        setAdding(true);
        addTask({value})
            .then(({data}) => {
                setTasks([...tasks, data]);
                setAdding(false);
            })
            .catch(error => {
                alert(error.message);
                setAdding(false);
            });
    }

    let message;
    if (error) {
        message = <ListItem>Tasks loading failed with error: {error.message}</ListItem>;
    } else if (loading) {
        message = <ListItem>Loading tasks...</ListItem>;
    } else if (!tasks.length) {
        message = <ListItem>No tasks! Well done!</ListItem>;
    }

    return <Paper>
        <List>
            <TaskEditItem
                editMode={false}
                key={Math.max(...tasks.map(t => t.id)) + 1}
                disabled={adding}
                onSubmit={handleAddTask}
            />
            <Divider/>
            {message}
            {tasks.map((currentTask, index, arr) => <Fragment key={currentTask.id}>
                <TaskListItem
                    {...currentTask}
                    onToggle={() => handleToggleTask(currentTask.id, !currentTask.completed)}
                    onUpdate={(value) => handleEditTask(currentTask.id, value)}
                    onDelete={() => handleDeleteTask(currentTask.id)}
                />
                {index < arr.length - 1 && <Divider/>}
            </Fragment>)}
        </List>
    </Paper>
}