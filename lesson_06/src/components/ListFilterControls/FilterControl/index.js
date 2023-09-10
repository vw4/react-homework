import {ButtonGroup} from "@mui/material";
import {FILTER_OPTIONS} from "../../../constants";
import FilterButton from "./FilterButton";

export default function FilterControl({filters, setFilters}) {
    const isFilterEnabled = (key) => filters.includes(key);

    const isLastFilter = (key) => !filters.filter(f => f !== key).length;

    const toggleFilter = (e, key) => {
        e.stopPropagation();
        if (filters.includes(key)) {
            if (isLastFilter(key)) {
                return;
            }
            setFilters((prevFilters) => prevFilters.filter(filter => filter !== key));
        } else {
            setFilters((prevFilters) => [...prevFilters, key]);
        }
    }

    return <ButtonGroup fullWidth variant="contained" aria-label="primary button group">
        {FILTER_OPTIONS
            .map(filterOption => <FilterButton
                key={filterOption.key}
                description={filterOption.description}
                selected={isFilterEnabled(filterOption.key)}
                onClick={e => toggleFilter(e, filterOption.key)}
            />)
        }
    </ButtonGroup>;
}
