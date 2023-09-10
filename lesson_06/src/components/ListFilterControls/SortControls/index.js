import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {SORT_OPTIONS} from "../../../constants";
import {memo} from "react";

export default memo(function SortControls({sorter, setSorter}) {
    return <FormControl fullWidth size="small">
        <InputLabel id="sort-select-label">Sort</InputLabel>
        <Select
            labelId="sort-select-label"
            id="sort-select"
            value={sorter}
            label="Sort tasks"
            onChange={(e) => setSorter(e.target.value)}
        >
            {SORT_OPTIONS
                .map((sorterOption) =>
                    <MenuItem key={sorterOption.key} value={sorterOption.key}>{sorterOption.description}</MenuItem>
                )
            }
        </Select>
    </FormControl>
})