import {Button} from "@mui/material";
import {memo} from "react";

export default memo(function FilterButton({description, selected, onClick}) {
    return <Button
        variant={selected ? 'contained' : 'outlined'}
        onClick={onClick}
    >
        {description}
    </Button>
})