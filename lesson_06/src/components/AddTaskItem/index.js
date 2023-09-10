import {TaskEditItem} from "../index";

export default function AddTaskItem({maxId, onAdd, adding}) {
    return <TaskEditItem
        editMode={false}
        key={maxId + 1}
        disabled={adding}
        onSubmit={onAdd}
    />
}