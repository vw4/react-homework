export default function Statistics(props) {
    const {list = []} = props;
    const allTasksCount = list.length;
    const completedTasksCount = list.filter(item => item.completed).length;
    const inProgressTasks = allTasksCount - completedTasksCount;
    return <ul>
        <li>All tasks: <b>{allTasksCount}</b></li>
        <li>Completed tasks: <b>{completedTasksCount}</b></li>
        <li>In progress tasks: <b>{inProgressTasks}</b></li>
    </ul>;
}