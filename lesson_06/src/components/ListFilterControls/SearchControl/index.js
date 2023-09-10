import {FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput} from "@mui/material";
import {Clear as ClearIcon} from "@mui/icons-material";

export default function SearchControl({search, setSearch}) {
    return <FormControl fullWidth variant="outlined" size="small">
        <InputLabel htmlFor="search-input">Search</InputLabel>
        <OutlinedInput
            id="search-input"
            label="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            endAdornment={
                <InputAdornment position="end">
                    <IconButton
                        aria-label="reset search"
                        onClick={() => setSearch('')}
                        edge="end"
                    >
                        <ClearIcon/>
                    </IconButton>
                </InputAdornment>
            }
        />
    </FormControl>;
}