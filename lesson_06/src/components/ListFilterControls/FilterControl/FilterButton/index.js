import {Button} from "@mui/material";

export default function FilterButton({description, selected, onClick}) {
    return <Button
        variant={selected ? 'contained' : 'outlined'}
        onClick={onClick}
    >
        {description}
    </Button>
}
