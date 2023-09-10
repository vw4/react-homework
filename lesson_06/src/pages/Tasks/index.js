import {Fragment, useState, useEffect} from 'react';
import {ListFilterControls, TasksList} from "../../components";
import {getTasks, updateTask, deleteTask, addTask} from "../../services/api";
import useFilteredSortedList from "../../hooks/useFilteredSortedList";

export default function Tasks() {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const [adding, setAdding] = useState(false);
    const [displayList, setList, setFilters, setSorter, setSearch] = useFilteredSortedList();
    const [color, setColor] = useState();

    const loadTasks = async () => {
        setLoading(true);
        const response = await getTasks();
        setTasks(response.data);
        setLoading(false);
    };

    useEffect(() => {
        loadTasks().catch(setError);
    }, []);
    useEffect(() => setList(tasks), [tasks])

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

    return <Fragment>
        <ListFilterControls onSearch={setSearch} onFilters={setFilters} onSorter={setSorter} onColorChange={setColor}/>
        <TasksList
            error={error}
            loading={loading}
            adding={adding}
            displayList={displayList}
            maxId={Math.max(...tasks.map(t => t.id))}
            onTaskAdd={handleAddTask}
            onTaskDelete={handleDeleteTask}
            onTaskEdit={handleEditTask}
            onTaskToggle={handleToggleTask}
            color={color}
        />
    </Fragment>
}