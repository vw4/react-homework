import {Fragment, useState} from 'react';
import {List, ListItemButton, Divider} from '@mui/material';
import {EditableListItem} from "../../components";

export default function EditableList({items = []}) {
    const [list, setList] = useState([...items]);

    if (!items.length) {
        return <List>
            <ListItemButton disabled>No list items...</ListItemButton>
        </List>;
    }
    return <List>
        {list.map((currentItem, index, arr) => <Fragment key={currentItem.id}>
            <EditableListItem
                value={currentItem.value}
                state={currentItem.completed}
                onClick={(callback) => {
                    console.log('onClick');
                    setList(list.map(listItem => currentItem === listItem ? {...listItem, completed: !currentItem.completed} : listItem));
                    setTimeout(callback, 3000);
                }}
                onEdit={(value, callback) => {
                    console.log('onEdit', value);
                    setList(list.map(listItem => currentItem === listItem ? {...listItem, value} : listItem));
                    setTimeout(callback, 3000);
                }}
                onDelete={() => {
                    console.log('onDelete');
                    setList(list.filter(listItem => currentItem !== listItem));
                }}
            />
            {index < arr.length - 1 && <Divider/>}
        </Fragment>)}
    </List>
}