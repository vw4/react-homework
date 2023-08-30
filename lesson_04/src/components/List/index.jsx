import {useState, useEffect} from "react";
import ListItem from "../ListItem";
import './style.css';

export default function List(props) {
    const {
        themeMode = 'dark', onListChange,
    } = props
    const [list, setList] = useState([{
        title: "tenetur eligendi enim",
        completed: true,
        id: "1"
    }, {
        title: "sunt inventore quo",
        completed: false,
        id: "2"
    }, {
        title: "accusantium voluptatum accusantium",
        completed: true,
        id: "3"
    }, {
        title: "rerum accusantium magni",
        completed: false,
        id: "4"
    }, {
        title: "accusantium ex natus",
        completed: true,
        id: "5"
    }]);

    useEffect(() => onListChange(list), [list, onListChange]);

    const makeOnDeleteFunc = (item) => {
        return () =>
            setList(
                (prevList) => prevList.filter(prevListItem => prevListItem !== item)
            );
    };

    const makeOnCompleteFunc = (item) => {
        return () =>
            setList(
                (prevList) =>
                    prevList.map(prevListItem => prevListItem === item ? {
                        ...prevListItem,
                        completed: true
                    } : prevListItem)
            );
    };

    if (!list.length) {
        return <p>No tasks...</p>;
    }
    return <table className={'table-' + themeMode}>
        <thead>
        <tr>
            <th>Task</th>
            <th>Action</th>
        </tr>
        </thead>
        <tbody>
        {list.map(
            (listItem) =>
                <ListItem
                    key={listItem.id}
                    item={listItem}
                    onDelete={makeOnDeleteFunc(listItem)}
                    onComplete={makeOnCompleteFunc(listItem)}
                />
        )}
        </tbody>
    </table>;
}