export default function ListItem(props) {
    const {
        item: {title = '', completed = false},
        onDelete,
        onComplete,
    } = props;
    return <tr>
        <td style={{color: completed ? 'red' : 'green'}}>{title}</td>
        <td>{
            completed
                ? <button onClick={onDelete}>Delete</button>
                : <button onClick={onComplete}>Complete</button>
        }</td>
    </tr>;
}