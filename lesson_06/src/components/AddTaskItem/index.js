import {TaskEditItem} from "../index";
import {memo} from "react";

export default memo(function AddTaskItem({maxId, onAdd, adding}) {
    return <TaskEditItem
        editMode={false}
        key={maxId + 1}
        disabled={adding}
        onSubmit={onAdd}
    />
})